"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Mail,
  Loader2,
  ChevronRight,
  Circle,
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
import ConnectGmailButton from "@/components/googleConnectButton";
import { useRouter } from "next/navigation";
import Toast from "@/components/Toast";

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [fetchProgress, setFetchProgress] = useState<number>(0);
  const [dealsFound, setDealsFound] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
  const router = useRouter()

  const handleError = (errorMsg: string) => {
    setError(errorMsg)
    setToast({ message: errorMsg, type: 'error' })
  }
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
      description: "Link your email to detect partnership opportunities",
    },
    {
      number: 2,
      title: "Fetch Deals",
      description: "Scan your inbox for potential collaborations",
    },
    {
      number: 3,
      title: "Complete Setup",
      description: "Finalize and access your dashboard",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-full">
      <Card className="border-border bg-card shadow-sm">
        <CardHeader className="border-border border-b pb-8">
          <CardTitle className="font-hanken text-foreground text-2xl font-semibold">
            Setup Your Account
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-2 text-base">
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
                        "flex items-start gap-4 rounded-lg p-4 transition-all duration-200",
                        currentStep === step.number
                          ? "bg-muted/50"
                          : currentStep > step.number
                            ? "opacity-60"
                            : "opacity-40",
                      )}
                    >
                      {/* Step Number/Icon */}
                      <div className="mt-0.5 flex-shrink-0">
                        {currentStep > step.number ? (
                          <div className="bg-primary flex h-6 w-6 items-center justify-center rounded-full">
                            <CheckCircle2 className="text-primary-foreground h-4 w-4" />
                          </div>
                        ) : currentStep === step.number ? (
                          <div className="border-primary bg-background flex h-6 w-6 items-center justify-center rounded-full border-2">
                            <div className="bg-primary h-2 w-2 rounded-full" />
                          </div>
                        ) : (
                          <div className="border-muted flex h-6 w-6 items-center justify-center rounded-full border-2">
                            <Circle className="text-muted-foreground h-3 w-3" />
                          </div>
                        )}
                      </div>

                      {/* Step Content */}
                      <div className="min-w-0 flex-1">
                        <div className="text-foreground font-hanken text-sm font-semibold">
                          {step.title}
                        </div>
                        <div className="text-muted-foreground mt-1 text-xs leading-relaxed">
                          {step.description}
                        </div>
                      </div>
                    </div>

                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="bg-border ml-7 h-6 w-0.5" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Step Content */}
            <div className="flex min-h-[400px] flex-1 items-center">
              {/* Step 1: Connect Gmail */}
              {currentStep === 1 && (
                <div className="w-full space-y-8">
                  <div className="space-y-3">
                    <h3 className="font-hanken text-foreground text-xl font-semibold">
                      Connect Your Gmail Account
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We'll use read-only access to scan your emails for
                      partnership opportunities. Your credentials are never
                      stored.
                    </p>
                  </div>

                  <div className="border-border bg-card space-y-6 rounded-lg border p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-background border-border flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border">
                        <Mail className="text-foreground h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="text-foreground font-hanken text-sm font-semibold">
                          Gmail Integration
                        </div>
                        <div className="text-muted-foreground mt-0.5 text-xs">
                          OAuth 2.0 Secure Connection
                        </div>
                      </div>
                      {isConnected && (
                        <CheckCircle2 className="text-primary h-5 w-5" />
                      )}
                    </div>

                    <div className="border-border border-t pt-4">
                      <ConnectGmailButton
                        variant={error ? 'error' : 'default'}
                        size="large"
                        onError={handleError}
                      />
                    </div>
                  </div>
                  {toast && (
                    <Toast
                      message={toast.message}
                      type={toast.type}
                      onClose={() => setToast(null)}
                    />
                  )}
                  <div className="bg-muted/30 border-border flex items-start gap-3 rounded-lg border p-4">
                    <div className="bg-muted-foreground mt-2 h-1 w-1 flex-shrink-0 rounded-full" />
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      We use industry-standard encryption and never access your
                      password. You can revoke access anytime from your Google
                      account settings.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 2: Fetch Deals */}
              {currentStep === 2 && (
                <div className="w-full space-y-8">
                  <div className="space-y-3">
                    <h3 className="font-hanken text-foreground text-xl font-semibold">
                      Scan Your Inbox
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We'll analyze your emails from the past 90 days to
                      identify potential partnership opportunities.
                    </p>
                  </div>

                  {!isFetching && dealsFound === null && (
                    <div className="border-border bg-card space-y-6 rounded-lg border p-8">
                      <div className="space-y-4 text-center">
                        <div className="bg-muted inline-flex h-16 w-16 items-center justify-center rounded-full">
                          <Mail className="text-foreground h-8 w-8" />
                        </div>
                        <div className="space-y-2">
                          <div className="text-foreground text-sm font-semibold">
                            Ready to scan
                          </div>
                          <div className="text-muted-foreground mx-auto max-w-xs text-xs">
                            Click below to start analyzing your emails for
                            business opportunities
                          </div>
                        </div>
                      </div>

                      <Button
                        onClick={handleFetch}
                        className="h-11 w-full font-medium"
                      >
                        Start Scanning
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  {isFetching && (
                    <div className="border-border bg-card space-y-6 rounded-lg border p-8">
                      <div className="space-y-4 text-center">
                        <div className="bg-muted inline-flex h-16 w-16 items-center justify-center rounded-full">
                          <Loader2 className="text-foreground h-8 w-8 animate-spin" />
                        </div>
                        <div className="space-y-2">
                          <div className="text-foreground text-sm font-semibold">
                            Scanning emails...
                          </div>
                          <div className="text-muted-foreground text-xs">
                            This may take a moment
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Progress value={fetchProgress} className="h-2" />
                        <div className="text-muted-foreground flex justify-between text-xs">
                          <span>Progress</span>
                          <span>{fetchProgress}%</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {dealsFound !== null && !isFetching && (
                    <div className="border-border bg-card space-y-6 rounded-lg border p-8">
                      <div className="space-y-4 text-center">
                        <div className="bg-primary/10 inline-flex h-16 w-16 items-center justify-center rounded-full">
                          <CheckCircle2 className="text-primary h-8 w-8" />
                        </div>
                        <div className="space-y-2">
                          <div className="text-foreground text-sm font-semibold">
                            Scan complete
                          </div>
                          <div className="text-muted-foreground text-xs">
                            Found{" "}
                            <span className="text-foreground font-semibold">
                              {dealsFound} potential deals
                            </span>{" "}
                            in your inbox
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
                    <h3 className="font-hanken text-foreground text-xl font-semibold">
                      Setup Complete
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      You're all set! Your dashboard is ready with {dealsFound}{" "}
                      opportunities waiting for you.
                    </p>
                  </div>

                  <div className="border-border bg-card space-y-6 rounded-lg border p-8">
                    <div className="space-y-4">
                      <div className="bg-muted/30 flex items-center justify-between rounded-lg p-4">
                        <div className="space-y-1">
                          <div className="text-foreground text-sm font-semibold">
                            Gmail Connected
                          </div>
                          <div className="text-muted-foreground text-xs">
                            Monitoring active
                          </div>
                        </div>
                        <CheckCircle2 className="text-primary h-5 w-5" />
                      </div>

                      <div className="bg-muted/30 flex items-center justify-between rounded-lg p-4">
                        <div className="space-y-1">
                          <div className="text-foreground text-sm font-semibold">
                            Initial Scan
                          </div>
                          <div className="text-muted-foreground text-xs">
                            {dealsFound} deals found
                          </div>
                        </div>
                        <CheckCircle2 className="text-primary h-5 w-5" />
                      </div>
                    </div>

                    <div className="border-border border-t pt-4">
                      <Button
                        onClick={handleComplete}
                        className="h-11 w-full font-medium"
                      >
                        Go to Dashboard
                        <ChevronRight className="ml-2 h-4 w-4" />
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
