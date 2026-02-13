import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast"; // Assuming toast hook exists based on package.json
import { trackDownload } from "@/lib/analytics";

interface DownloadDialogProps {
  children: React.ReactNode;
}

export const DownloadDialog = ({ children }: DownloadDialogProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const { toast } = useToast();

  const handleDownload = () => {
    // Trigger the file download
    const link = document.createElement("a");
    link.href = import.meta.env.VITE_DRIVE_FILE_ID 
      ? `https://drive.google.com/uc?export=download&id=${import.meta.env.VITE_DRIVE_FILE_ID}`
      : "https://drive.google.com/uc?export=download&id=1CWODC_9bKV_rGHk6KKkQoUbT8x1FASOR";
    
    // Track the event
    if (typeof window.gtag === 'function') {
        window.gtag('event', 'download', {
          'event_category': 'eBook',
          'event_label': 'eBook_Download_Form',
          'value': 1
        });
    }
    
    link.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Send Email (non-blocking for user experience, but good to wait for success confirmation)
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send confirmation email");
      }

      // 2. Success Feedback
      toast({
        title: "Success!",
        description: "Your download is starting. Check your email for confirmation.",
      });

      // 3. Trigger Download
      handleDownload();

      // 4. Close Dialog
      setOpen(false);
      setFormData({ name: "", email: "" }); // Reset form
      
    } catch (error) {
      console.error(error);
      // Even if email fails, we should probably still let them download or afford a retry.
      // For now, let's let them download anyway but show a different toast.
      toast({
        title: "Download Starting",
        description: "We couldn't send the email, but your download is starting.",
        variant: "destructive",
      });
      handleDownload();
      setOpen(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Download Free eBook</DialogTitle>
          <DialogDescription>
            Enter your details to receive the download link and a confirmation email.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Processing..." : "Download Now"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
