import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, FileText, CheckCircle2, Loader2, ScanSearch } from 'lucide-react';
import { Button } from '../components/ui/button';

export const OcrScannerPage = () => {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(false);

  const handleUpload = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setResult(true);
    }, 3000);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 w-full max-w-4xl mx-auto">
      
      <div>
        <h2 className="text-2xl font-bold">Smart Document OCR</h2>
        <p className="text-muted-foreground text-sm">Upload handwritten bills, invoices, or milk slips for automatic data extraction into your ledger.</p>
      </div>

      {!result ? (
        <div 
          onClick={scanning ? undefined : handleUpload}
          className={`glass-card border-2 border-dashed ${scanning ? 'border-blue-500/50 bg-blue-500/5' : 'border-white/20 hover:border-blue-400 hover:bg-white/5 cursor-pointer'} p-16 flex flex-col items-center justify-center text-center transition-all min-h-[400px] relative overflow-hidden`}
        >
          {scanning ? (
            <div className="space-y-6 flex flex-col items-center">
              <div className="relative">
                <ScanSearch size={64} className="text-blue-400 animate-pulse" />
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1 bg-blue-400 shadow-[0_0_10px_#60a5fa]"
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Analyzing Document...</h3>
                <p className="text-muted-foreground text-sm flex items-center gap-2 justify-center">
                  <Loader2 size={14} className="animate-spin" /> Extracting handwritten vernacular text
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center">
                <UploadCloud size={32} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Click to Upload or Drag & Drop</h3>
                <p className="text-muted-foreground text-sm">Supports PDF, JPG, PNG (Max 5MB)</p>
              </div>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Select File</Button>
            </div>
          )}
        </div>
      ) : (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-6 border-emerald-500/30">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
              <CheckCircle2 size={24} className="text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-emerald-400">Extraction Successful</h3>
              <p className="text-muted-foreground text-sm">Milk cooperative receipt digitized.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Original Image</h4>
              <div className="bg-white/5 rounded-lg border border-white/10 p-4 aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                <FileText size={64} className="text-muted-foreground/30 absolute" />
                {/* Mock Receipt overlay */}
                <div className="relative z-10 font-mono text-[10px] text-white/40 p-4 rotate-[-2deg] bg-white/5 shadow-xl w-3/4 h-3/4 rounded overflow-hidden">
                  <p className="text-center font-bold mb-4 border-b border-white/20 pb-2">NELLORE DAIRY CO-OP</p>
                  <p>Date: 14-Aug-2026</p>
                  <p>Qty: 42.5 Liters</p>
                  <p>Fat %: 6.2</p>
                  <p>Rate: Rs. 42.00</p>
                  <p className="mt-4 pt-2 border-t border-white/20 font-bold">TOTAL: Rs. 1,785.00</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Extracted Ledger Entry</h4>
              <div className="space-y-4">
                <div className="bg-background/50 rounded-lg p-3 border border-white/10">
                  <span className="text-xs text-muted-foreground">Date</span>
                  <p className="font-bold">14 Aug 2026</p>
                </div>
                <div className="bg-background/50 rounded-lg p-3 border border-white/10">
                  <span className="text-xs text-muted-foreground">Category</span>
                  <p className="font-bold text-blue-400">Income (Milk Sales)</p>
                </div>
                <div className="bg-background/50 rounded-lg p-3 border border-white/10">
                  <span className="text-xs text-muted-foreground">Quantity</span>
                  <p className="font-bold">42.5 L</p>
                </div>
                <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/30">
                  <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Total Amount</span>
                  <p className="text-2xl font-black text-emerald-400">₹1,785.00</p>
                </div>

                <div className="pt-4 flex gap-3">
                  <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">Save to Ledger</Button>
                  <Button variant="outline" className="flex-1 border-white/20" onClick={() => setResult(false)}>Scan Another</Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

    </motion.div>
  );
};
