'use client'
import Toast from "@/components/Toast";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function ConnectionStatusHandler() {
  const searchParams = useSearchParams()
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  useEffect(() => {
    const connected = searchParams.get('connected')
    const error = searchParams.get('error')

    if (connected === 'gmail') {
      setToast({ message: 'Gmail connected successfully!', type: 'success' })
      // Clear URL parameters
      window.history.replaceState({}, '', '/dashboard')
    } else if (error) {
      const errorMessages: Record<string, string> = {
        'oauth_access_denied': 'Gmail connection was cancelled',
        'no_code': 'Authorization failed',
        'invalid_state': 'Security validation failed',
        'no_refresh_token': 'Please disconnect and reconnect Gmail',
        'email_not_verified': 'Please verify your email',
        'user_not_found': 'User account not found',
        'auth_failed': 'Gmail connection failed',
      }
      
      setToast({ 
        message: errorMessages[error] || 'Connection error', 
        type: 'error' 
      })
      
      // Clear URL parameters
      window.history.replaceState({}, '', '/dashboard')
    }
  }, [searchParams])

  if (!toast) return null

  return (
    <Toast
      message={toast.message}
      type={toast.type}
      onClose={() => setToast(null)}
    />
  )
}
