"use client";

import React, { useState } from "react";
import { 
  CheckCircle2, 
  Mail, 
  Loader2, 
  ChevronRight,
  Circle
} from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [fetchProgress, setFetchProgress] = useState<number>(0);
  const [dealsFound, setDealsFound] = useState<number | null>(null);

  const handleConnect = () => {
    // Simulate connection
    setIsConnected(true);
    setTimeout(() => setCurrentStep(2), 300);
  };

  const handleFetch = () => {
    setIsFetching(true);
    setFetchProgress(0);

    const interval = setInterval(() => {
      setFetchProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsFetching(false);
          setDealsFound(3);
          setTimeout(() => setCurrentStep(3), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleComplete = () => {
    // Navigate to dashboard or complete setup
    console.log("Setup completed");
  };

  const steps = [
    {
      number: 1,
      title: "Connect Gmail",
      description: "Link your email to detect partnership opportunities"
    },
    {
      number: 2,
      title: "Fetch Deals",
      description: "Scan your inbox for potential collaborations"
    },
    {
      number: 3,
      title: "Complete Setup",
      description: "Finalize and access your dashboard"
    }
  ];

  return (
    <div className="w-full max-w-full mx-auto">
      <Card className="border-border bg-card shadow-sm">
        <CardHeader className="border-b border-border pb-8">
          <CardTitle className="font-hanken text-2xl font-semibold text-foreground">
            Setup Your Account
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground mt-2">
            Complete these steps to start managing your partnership deals
          </CardDescription>
        </CardHeader>

        <CardContent className="p-8">
          <div className="flex gap-12">
            {/* Left Side - Steps Navigation */}
            <div className="w-64 flex-shrink-0">
              <div className="space-y-1">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative">
                    <div
                      className={cn(
                        "flex items-start gap-4 p-4 rounded-lg transition-all duration-200",
                        currentStep === step.number
                          ? "bg-muted/50"
                          : currentStep > step.number
                          ? "opacity-60"
                          : "opacity-40"
                      )}
                    >
                      {/* Step Number/Icon */}
                      <div className="flex-shrink-0 mt-0.5">
                        {currentStep > step.number ? (
                          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                          </div>
                        ) : currentStep === step.number ? (
                          <div className="w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-muted flex items-center justify-center">
                            <Circle className="w-3 h-3 text-muted-foreground" />
                          </div>
                        )}
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-foreground font-hanken">
                          {step.title}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {step.description}
                        </div>
                      </div>
                    </div>

                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="ml-7 h-6 w-0.5 bg-border" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Step Content */}
            <div className="flex-1 min-h-[400px] flex items-center">
              {/* Step 1: Connect Gmail */}
              {currentStep === 1 && (
                <div className="w-full space-y-8">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold font-hanken text-foreground">
                      Connect Your Gmail Account
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We'll use read-only access to scan your emails for partnership opportunities. Your credentials are never stored.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-6 bg-card space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-foreground font-hanken">
                          Gmail Integration
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          OAuth 2.0 Secure Connection
                        </div>
                      </div>
                      {isConnected && (
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      )}
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button
                        onClick={handleConnect}
                        disabled={isConnected}
                        className="w-full h-11 font-medium"
                      >
                        {isConnected ? "Connected" : "Connect Gmail"}
                        {!isConnected && <ChevronRight className="w-4 h-4 ml-2" />}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border">
                    <div className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      We use industry-standard encryption and never access your password. You can revoke access anytime from your Google account settings.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 2: Fetch Deals */}
              {currentStep === 2 && (
                <div className="w-full space-y-8">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold font-hanken text-foreground">
                      Scan Your Inbox
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We'll analyze your emails from the past 90 days to identify potential partnership opportunities.
                    </p>
                  </div>

                  {!isFetching && dealsFound === null && (
                    <div className="border border-border rounded-lg p-8 bg-card space-y-6">
                      <div className="space-y-4 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted">
                          <Mail className="w-8 h-8 text-foreground" />
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-foreground">
                            Ready to scan
                          </div>
                          <div className="text-xs text-muted-foreground max-w-xs mx-auto">
                            Click below to start analyzing your emails for business opportunities
                          </div>
                        </div>
                      </div>

                      <Button
                        onClick={handleFetch}
                        className="w-full h-11 font-medium"
                      >
                        Start Scanning
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  )}

                  {isFetching && (
                    <div className="border border-border rounded-lg p-8 bg-card space-y-6">
                      <div className="space-y-4 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted">
                          <Loader2 className="w-8 h-8 text-foreground animate-spin" />
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-foreground">
                            Scanning emails...
                          </div>
                          <div className="text-xs text-muted-foreground">
                            This may take a moment
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Progress value={fetchProgress} className="h-2" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Progress</span>
                          <span>{fetchProgress}%</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {dealsFound !== null && !isFetching && (
                    <div className="border border-border rounded-lg p-8 bg-card space-y-6">
                      <div className="space-y-4 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                          <CheckCircle2 className="w-8 h-8 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-foreground">
                            Scan complete
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Found <span className="font-semibold text-foreground">{dealsFound} potential deals</span> in your inbox
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Complete Setup */}
              {currentStep === 3 && (
                <div className="w-full space-y-8">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold font-hanken text-foreground">
                      Setup Complete
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      You're all set! Your dashboard is ready with {dealsFound} opportunities waiting for you.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-8 bg-card space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                        <div className="space-y-1">
                          <div className="text-sm font-semibold text-foreground">
                            Gmail Connected
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Monitoring active
                          </div>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                        <div className="space-y-1">
                          <div className="text-sm font-semibold text-foreground">
                            Initial Scan
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {dealsFound} deals found
                          </div>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button
                        onClick={handleComplete}
                        className="w-full h-11 font-medium"
                      >
                        Go to Dashboard
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}