'use client'

import { useState, useEffect } from 'react'
import { Mail, CheckCircle2, Loader2, X, RefreshCw } from 'lucide-react'
import ConnectGmailButton from './googleConnectButton'

interface ConnectionStatus {
  connected: boolean
  account: {
    accountEmail: string
    createdAt: string
    lastSyncAt: string | null
  } | null
}

export default function GmailConnectionCard() {
  const [status, setStatus] = useState<ConnectionStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [disconnecting, setDisconnecting] = useState(false)

  useEffect(() => {
    checkConnection()
  }, [])

  const checkConnection = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/auth/google/status')
      const data = await response.json()
      setStatus(data)
    } catch (error) {
      console.error('Failed to check connection:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDisconnect = async () => {
    if (!confirm('Are you sure you want to disconnect Gmail?')) {
      return
    }

    try {
      setDisconnecting(true)
      const response = await fetch('/api/auth/google/disconnect', {
        method: 'POST'
      })

      if (!response.ok) {
        throw new Error('Failed to disconnect')
      }

      await checkConnection()
    } catch (error) {
      console.error('Failed to disconnect:', error)
      alert('Failed to disconnect Gmail. Please try again.')
    } finally {
      setDisconnecting(false)
    }
  }

  if (loading) {
    return (
      <div className="border border-border rounded-xl p-6 bg-card">
        <div className="flex items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      </div>
    )
  }

  return (
    <div className="border border-border rounded-xl p-6 bg-card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${status?.connected ? 'bg-foreground/10' : 'bg-muted'}`}>
            <Mail className={`h-5 w-5 ${status?.connected ? 'text-foreground' : 'text-muted-foreground'}`} />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Gmail</h3>
            <p className="text-sm text-muted-foreground">
              {status?.connected ? 'Connected' : 'Not connected'}
            </p>
          </div>
        </div>

        {status?.connected && (
          <CheckCircle2 className="h-5 w-5 text-foreground" />
        )}
      </div>

      {status?.connected && status.account ? (
        <div className="space-y-3">
          <div className="text-sm">
            <span className="text-muted-foreground">Account: </span>
            <span className="text-foreground font-medium">{status.account.accountEmail}</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={checkConnection}
              disabled={loading}
              className="flex-1 px-3 py-2 border border-border rounded-lg text-sm hover:bg-muted transition-colors disabled:opacity-50"
            >
              <RefreshCw className="h-4 w-4 inline mr-2" />
              Refresh
            </button>
            <button
              onClick={handleDisconnect}
              disabled={disconnecting}
              className="flex-1 px-3 py-2 border border-destructive text-destructive rounded-lg text-sm hover:bg-destructive/10 transition-colors disabled:opacity-50"
            >
              {disconnecting ? (
                <>
                  <Loader2 className="h-4 w-4 inline mr-2 animate-spin" />
                  Disconnecting...
                </>
              ) : (
                <>
                  <X className="h-4 w-4 inline mr-2" />
                  Disconnect
                </>
              )}
            </button>
          </div>
        </div>
      ) : (
        <ConnectGmailButton size="large" />
      )}
    </div>
  )
}