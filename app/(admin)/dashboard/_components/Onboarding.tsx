"use client";

import React, { useState, useEffect } from "react";
import { 
  CheckCircle2, 
  Mail, 
  Youtube, 
  ArrowRight, 
  ShieldCheck, 
  Loader2, 
  Sparkles,
  LayoutDashboard,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function OnboardingPage() {
  const [step, setStep] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Simulation State
  const [scanProgress, setScanProgress] = useState<number>(0);
  const [scanStatus, setScanStatus] = useState<string>("Initializing...");

  // Data States
  const [formData, setFormData] = useState({ name: "", niche: "" });
  const [connections, setConnections] = useState({ gmail: false, youtube: false });

  const handleNext = () => {
    if (step === 3) startScanningProcess();
    else setStep((prev) => prev + 1);
  };

  const startScanningProcess = () => {
    setStep(4);
    setIsLoading(true);
    
    const stages = [
      { progress: 10, text: "Connecting to Gmail API..." },
      { progress: 30, text: "Fetching emails from last 90 days..." },
      { progress: 50, text: "AI identifying partnership keywords..." },
      { progress: 75, text: "Filtering spam and newsletters..." },
      { progress: 90, text: "Constructing deal pipeline..." },
      { progress: 100, text: "Dashboard Ready!" },
    ];

    let currentStage = 0;
    const interval = setInterval(() => {
      if (currentStage >= stages.length) {
        clearInterval(interval);
        setIsLoading(false);
        return;
      }
      setScanProgress(stages[currentStage].progress);
      setScanStatus(stages[currentStage].text);
      currentStage++;
    }, 800); 
  };

  const toggleConnection = (type: "gmail" | "youtube") => {
    setConnections((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center justify-center p-6 font-montserrat text-foreground selection:bg-primary/10">
      
      {/* Centered Column */}
      <div className="w-full max-w-2xl space-y-10">
        
        {/* Modern Step Indicator */}
        <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 border-2",
                      step === i
                        ? "bg-primary text-primary-foreground border-primary ring-4 ring-primary/10 scale-110"
                        : step > i
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-muted-foreground border-border"
                    )}
                  >
                    {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
                  </div>
                </div>
                {i !== 4 && (
                  <div
                    className={cn(
                      "w-16 h-[2px] rounded-full transition-all duration-700 delay-100",
                      step > i ? "bg-primary" : "bg-border"
                    )}
                  />
                )}
              </React.Fragment>
            ))}
        </div>

        {/* Main Card */}
        <Card className="border-border/60 shadow-xl bg-card transition-all duration-500 ease-out overflow-hidden">
          
          {/* STEP 1: Profile */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <CardHeader className="text-center pt-10 pb-6 space-y-3">
                <CardTitle className="font-hanken text-3xl md:text-4xl font-semibold tracking-tight">
                  Welcome to Dealrize
                </CardTitle>
                <CardDescription className="text-base md:text-lg max-w-md mx-auto leading-relaxed">
                  Let's set up your command center. We'll help you turn inbox chaos into organized revenue.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6 px-8 md:px-12 pb-8">
                <div className="space-y-3 group">
                  <Label htmlFor="name" className="text-sm font-semibold text-foreground/80 pl-1">
                    What should we call you?
                  </Label>
                  <Input 
                    id="name" 
                    placeholder="e.g. Sarah Creator" 
                    className="h-14 px-5 bg-muted/30 border-input transition-all focus:bg-background focus:ring-2 focus:ring-primary/20 text-lg"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div className="space-y-3 group">
                  <Label htmlFor="niche" className="text-sm font-semibold text-foreground/80 pl-1">
                    What is your primary content niche?
                  </Label>
                  <Input 
                    id="niche" 
                    placeholder="e.g. Tech, Beauty, Gaming" 
                    className="h-14 px-5 bg-muted/30 border-input transition-all focus:bg-background focus:ring-2 focus:ring-primary/20 text-lg"
                    value={formData.niche}
                    onChange={(e) => setFormData({...formData, niche: e.target.value})}
                  />
                  <p className="text-[13px] text-muted-foreground pl-1 pt-1">
                    Our AI uses this to filter relevant opportunities from spam.
                  </p>
                </div>
              </CardContent>

              <CardFooter className="px-8 md:px-12 pb-10">
                <Button 
                  className="w-full h-14 text-base font-semibold rounded-xl shadow-lg hover:shadow-primary/25 transition-all" 
                  onClick={handleNext}
                  disabled={!formData.name}
                >
                  Get Started <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardFooter>
            </div>
          )}

          {/* STEP 2: Connections */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <CardHeader className="pt-10 pb-2 px-8 md:px-12">
                <CardTitle className="font-hanken text-3xl font-semibold">Connect Sources</CardTitle>
                <CardDescription className="text-base mt-2">
                  Securely connect your accounts. We only use <span className="font-medium text-foreground">read-only</span> access.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5 px-8 md:px-12 py-6">
                
                {/* Gmail Option */}
                <div 
                  onClick={() => toggleConnection("gmail")}
                  className={cn(
                    "group relative flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-md",
                    connections.gmail 
                      ? "bg-primary/5 border-primary shadow-sm" 
                      : "bg-card border-border hover:border-primary/40 hover:bg-muted/30"
                  )}
                >
                  <div className="flex items-center gap-5">
                    <div className="h-14 w-14 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 shrink-0">
                      <Mail className="w-7 h-7 text-[#EA4335]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-hanken font-bold text-lg leading-none">Gmail</h4>
                      <p className="text-sm text-muted-foreground">Sync emails & detect deals</p>
                    </div>
                  </div>
                  <div className={cn(
                    "h-8 w-8 rounded-full flex items-center justify-center transition-all",
                    connections.gmail ? "bg-primary text-primary-foreground scale-100" : "bg-muted text-muted-foreground/30 scale-90"
                  )}>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>

                {/* YouTube Option */}
                <div 
                  onClick={() => toggleConnection("youtube")}
                  className={cn(
                    "group relative flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-md",
                    connections.youtube
                      ? "bg-primary/5 border-primary shadow-sm" 
                      : "bg-card border-border hover:border-primary/40 hover:bg-muted/30"
                  )}
                >
                  <div className="flex items-center gap-5">
                    <div className="h-14 w-14 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 shrink-0">
                      <Youtube className="w-7 h-7 text-[#FF0000]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-hanken font-bold text-lg leading-none">YouTube</h4>
                      <p className="text-sm text-muted-foreground">Verify channel stats</p>
                    </div>
                  </div>
                  <div className={cn(
                    "h-8 w-8 rounded-full flex items-center justify-center transition-all",
                    connections.youtube ? "bg-primary text-primary-foreground scale-100" : "bg-muted text-muted-foreground/30 scale-90"
                  )}>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border border-border/50 mt-4">
                  <ShieldCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Dealrize uses OAuth 2.0. We never see your password, and we strictly operate on a read-only basis for deal detection. Your data is encrypted at rest.
                  </p>
                </div>

              </CardContent>
              <CardFooter className="flex justify-between px-8 md:px-12 pb-10">
                <Button variant="ghost" size="lg" onClick={() => setStep(1)} className="text-muted-foreground hover:text-foreground">
                  Back
                </Button>
                <Button 
                  size="lg"
                  className="px-10 h-12 text-base font-semibold rounded-xl"
                  onClick={handleNext}
                  disabled={!connections.gmail}
                >
                  Continue
                </Button>
              </CardFooter>
            </div>
          )}

          {/* STEP 3: Summary */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <CardHeader className="pt-10 px-8 md:px-12 text-center">
                <CardTitle className="font-hanken text-3xl font-semibold">Ready to Launch</CardTitle>
                <CardDescription className="text-base max-w-md mx-auto">
                  We'll scan your last 90 days of emails to find any missed opportunities.
                </CardDescription>
              </CardHeader>

              <CardContent className="px-8 md:px-12 py-6">
                <div className="bg-muted/30 rounded-2xl p-6 border border-border/60 space-y-5">
                   
                   <div className="flex justify-between items-center border-b border-border/50 pb-4">
                      <span className="text-sm font-semibold text-muted-foreground">User Profile</span>
                      <div className="text-right">
                        <div className="font-bold text-foreground">{formData.name}</div>
                        <div className="text-xs text-muted-foreground">{formData.niche} Creator</div>
                      </div>
                   </div>

                   <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-muted-foreground">Active Sources</span>
                      <div className="flex gap-2">
                        {connections.gmail && (
                          <Badge variant="outline" className="bg-background px-3 py-1 border-primary/20 text-foreground">
                            <Mail className="w-3 h-3 mr-2 text-red-500"/> Gmail
                          </Badge>
                        )}
                        {connections.youtube && (
                          <Badge variant="outline" className="bg-background px-3 py-1 border-primary/20 text-foreground">
                            <Youtube className="w-3 h-3 mr-2 text-red-600"/> YouTube
                          </Badge>
                        )}
                      </div>
                   </div>
                </div>

                <div className="mt-8 flex flex-col items-center justify-center text-center space-y-2">
                   <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <Sparkles className="w-6 h-6 text-primary" />
                   </div>
                   <h3 className="font-hanken font-semibold text-lg">AI Processing Engine</h3>
                   <p className="text-sm text-muted-foreground max-w-xs">
                     Clicking start will initialize the classification model on your inbox.
                   </p>
                </div>

              </CardContent>
              <CardFooter className="flex justify-between px-8 md:px-12 pb-10">
                <Button variant="ghost" size="lg" onClick={() => setStep(2)}>Back</Button>
                <Button 
                  size="lg"
                  className="w-full ml-6 h-12 text-base font-semibold rounded-xl shadow-lg hover:shadow-primary/25"
                  onClick={handleNext}
                >
                  Start Initial Scan
                </Button>
              </CardFooter>
            </div>
          )}

          {/* STEP 4: Processing */}
          {step === 4 && (
            <div className="animate-in fade-in zoom-in-95 duration-700 py-12 px-8 md:px-12 min-h-[500px] flex flex-col justify-center">
                
                {scanProgress < 100 ? (
                  <div className="flex flex-col items-center justify-center space-y-10">
                    <div className="relative">
                      {/* Pulse Effect */}
                      <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse scale-150" />
                      <div className="relative bg-background p-6 rounded-full border-4 border-muted shadow-2xl">
                        <Loader2 className="w-16 h-16 text-primary animate-spin" />
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-center w-full max-w-sm">
                      <h3 className="font-hanken text-2xl font-semibold animate-pulse text-foreground">
                        Scanning Inbox...
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground h-6 font-mono">
                        {scanStatus}
                      </p>
                    </div>

                    <div className="w-full max-w-sm space-y-2">
                      <Progress value={scanProgress} className="h-3 rounded-full bg-muted" />
                      <div className="flex justify-between text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
                        <span>Progress</span>
                        <span>{scanProgress}%</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-8 animate-in slide-in-from-bottom-4 duration-500">
                     <div className="h-24 w-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-2 shadow-inner">
                        <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
                     </div>
                     <div className="space-y-3 text-center max-w-md">
                        <h3 className="font-hanken text-3xl font-bold tracking-tight">Setup Complete</h3>
                        <p className="text-lg text-muted-foreground">
                          We found <span className="font-bold text-foreground underline decoration-primary/50 decoration-2">3 potential deals</span> waiting for you.
                        </p>
                     </div>
                     <Button className="w-full max-w-xs h-14 text-lg font-semibold rounded-xl shadow-xl hover:shadow-primary/20 transition-all group">
                        Enter Dashboard <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                     </Button>
                  </div>
                )}
            </div>
          )}

        </Card>

        {/* Footer */}
        <div className="flex justify-center gap-8 text-xs font-medium text-muted-foreground/60">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Help Center</a>
        </div>

      </div>
    </div>
  );
}