'use client'

import { useState } from 'react'
import { Mail, Loader2, AlertCircle } from 'lucide-react'

interface ConnectGmailButtonProps {
  variant?: 'default' | 'error'
  size?: 'default' | 'large'
  onError?: (error: string) => void
}

export default function ConnectGmailButton({ 
  variant = 'default',
  size = 'default',
  onError 
}: ConnectGmailButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleConnect = async () => {
    try {
      setLoading(true)
      
      // Get OAuth URL from API
      const response = await fetch('/api/auth/google/url')
      
      if (!response.ok) {
        throw new Error('Failed to get OAuth URL')
      }
      
      const { url } = await response.json()
      
      // Redirect to Google OAuth
      window.location.href = url
    } catch (error) {
      console.error('Failed to initiate OAuth:', error)
      setLoading(false)
      
      if (onError) {
        onError('Connection failed')
      }
    }
  }

  const isError = variant === 'error'
  const isLarge = size === 'large'

  return (
    <button
      onClick={handleConnect}
      disabled={loading}
      className={`
        inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors
        disabled:opacity-50 disabled:cursor-not-allowed
        ${isLarge ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'}
        ${isError 
          ? 'bg-destructive text-destructive-foreground hover:bg-destructive/90' 
          : 'bg-foreground text-background hover:bg-foreground/90'
        }
      `}
    >
      {loading ? (
        <>
          <Loader2 className={`${isLarge ? 'h-5 w-5' : 'h-4 w-4'} animate-spin`} />
          Connecting...
        </>
      ) : isError ? (
        <>
          <AlertCircle className={isLarge ? 'h-5 w-5' : 'h-4 w-4'} />
          Retry Connection
        </>
      ) : (
        <>
          <Mail className={isLarge ? 'h-5 w-5' : 'h-4 w-4'} />
          Connect Gmail
        </>
      )}
    </button>
  )
}