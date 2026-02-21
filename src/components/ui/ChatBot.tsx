'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Box,
  TextField,
  Paper,
  IconButton,
  Typography,
  Fab,
  CircularProgress,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { colors } from '@/constants/colors';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface QuickReply {
  id: string;
  label: string;
  value: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [quickReplies, setQuickReplies] = useState<QuickReply[]>([]);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [conversationPhase, setConversationPhase] = useState<'initial' | 'service-selected' | 'ongoing'>('initial');
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  // Initialize greeting message with service options
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const serviceOptions: QuickReply[] = language === 'hr' 
        ? [
            { id: '1', label: '🌐 Web razvoj', value: 'web-development' },
            { id: '2', label: '☁️ Hosting', value: 'hosting' },
            { id: '3', label: '⚡ Optimizacija performansi', value: 'performance-optimization' },
            { id: '4', label: '� Sigurnost & Usklađenost', value: 'security-compliance' },
            { id: '5', label: '🤖 AI integracija', value: 'ai-integration' },
            { id: '6', label: '💼 B2B savjetovanje', value: 'b2b-consulting' },
          ]
        : [
            { id: '1', label: '🌐 Web Development', value: 'web-development' },
            { id: '2', label: '☁️ Hosting', value: 'hosting' },
            { id: '3', label: '⚡ Performance Optimization', value: 'performance-optimization' },
            { id: '4', label: '🔒 Security & Compliance', value: 'security-compliance' },
            { id: '5', label: '🤖 AI Integration', value: 'ai-integration' },
            { id: '6', label: '💼 B2B Consulting', value: 'b2b-consulting' },
          ];

      const greetingMsg: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: language === 'hr'
          ? 'Zdravo! 👋 Koje usluge vas zanimaju?'
          : 'Hello! 👋 Which services interest you?',
      };

      setMessages([greetingMsg]);
      setQuickReplies(serviceOptions);
      setConversationPhase('initial');
    }
  }, [isOpen, language, messages.length]);

  // Auto-scroll to latest message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, quickReplies]);

  const handleQuickReply = async (reply: QuickReply) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: reply.label,
    };

    setMessages((prev) => [...prev, userMessage]);
    setQuickReplies([]);
    setSelectedService(reply.value);
    setIsLoading(true);
    setConversationPhase('service-selected');

    // Get service name in user's language
    const serviceNames = language === 'hr'
      ? {
          'web-development': 'Web razvoj',
          'hosting': 'Hosting',
          'performance-optimization': 'Optimizacija performansi',
          'security-compliance': 'Sigurnost & Usklađenost',
          'ai-integration': 'AI integracija',
          'b2b-consulting': 'B2B savjetovanje',
        }
      : {
          'web-development': 'Web Development',
          'hosting': 'Hosting',
          'performance-optimization': 'Performance Optimization',
          'security-compliance': 'Security & Compliance',
          'ai-integration': 'AI Integration',
          'b2b-consulting': 'B2B Consulting',
        };

    const serviceName = serviceNames[reply.value as keyof typeof serviceNames];

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            ...messages,
            userMessage,
          ].map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
          language,
          selectedService: reply.value,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';
      const assistantId = (Date.now() + 1).toString();

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          assistantMessage += chunk;

          setMessages((prev) => {
            const lastMsg = prev[prev.length - 1];
            if (lastMsg && lastMsg.role === 'assistant' && lastMsg.id === assistantId) {
              return [
                ...prev.slice(0, -1),
                { ...lastMsg, content: assistantMessage },
              ];
            } else {
              return [
                ...prev,
                {
                  id: assistantId,
                  role: 'assistant',
                  content: assistantMessage,
                },
              ];
            }
          });
        }
      }

      // Show next steps after service suggestion
      setTimeout(() => {
        const nextStepsMsg: Message = {
          id: (Date.now() + 2).toString(),
          role: 'assistant',
          content: language === 'hr'
            ? `\n\n**Sljedeći koraci:**\n1. Odgovori na pitanja o tvojim potrebama\n2. Pogledaj naše pakete i cijene\n3. Kontaktiraj nas za ponudu\n\nKako mogu više pomoći s ${serviceName}?`
            : `\n\n**Next Steps:**\n1. Tell us more about your needs\n2. Review our packages and pricing\n3. Contact us for a custom quote\n\nHow can I help you more with ${serviceName}?`,
        };
        setMessages((prev) => [...prev, nextStepsMsg]);
        setConversationPhase('ongoing');
      }, 500);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMsg = error instanceof Error ? error.message : 'Unknown error';
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: language === 'hr'
            ? `Ispričavamo se, došlo je do greške: ${errorMsg}`
            : `Sorry, there was an error: ${errorMsg}`,
        },
      ]);
      setConversationPhase('ongoing');
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setQuickReplies([]);
    setIsLoading(true);
    setConversationPhase('ongoing');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            ...messages,
            userMessage,
          ].map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
          language,
          selectedService: selectedService || undefined,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';
      const assistantId = (Date.now() + 1).toString();

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          assistantMessage += chunk;

          // Update or add assistant message
          setMessages((prev) => {
            const lastMsg = prev[prev.length - 1];
            if (lastMsg && lastMsg.role === 'assistant' && lastMsg.id === assistantId) {
              return [
                ...prev.slice(0, -1),
                { ...lastMsg, content: assistantMessage },
              ];
            } else {
              return [
                ...prev,
                {
                  id: assistantId,
                  role: 'assistant',
                  content: assistantMessage,
                },
              ];
            }
          });
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMsg = error instanceof Error ? error.message : 'Unknown error';
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: language === 'hr'
            ? `Ispričavamo se, došlo je do greške: ${errorMsg}`
            : `Sorry, there was an error: ${errorMsg}`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const chatPlaceholder =
    language === 'hr'
      ? 'Pitajte nešto o našim uslugama...'
      : 'Ask about our services...';

  const chatTitle =
    language === 'hr' ? 'FractalByte AI Asistent' : 'FractalByte AI Assistant';

  return (
    <>
      {/* Floating Chat Button */}
      <Fab
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          position: 'fixed',
          bottom: { xs: 20, md: 30 },
          right: { xs: 20, md: 30 },
          zIndex: 999,
          bgcolor: colors.primary,
          color: 'white',
          animation: 'chatPulse 2.2s ease-in-out infinite',
          '@keyframes chatPulse': {
            '0%': {
              boxShadow: '0 0 0 0 rgba(57, 213, 211, 0.45)',
              transform: 'scale(1)',
            },
            '70%': {
              boxShadow: '0 0 0 14px rgba(57, 213, 211, 0)',
              transform: 'scale(1.03)',
            },
            '100%': {
              boxShadow: '0 0 0 0 rgba(57, 213, 211, 0)',
              transform: 'scale(1)',
            },
          },
          '&:hover': {
            bgcolor: colors.hoverPrimary,
            animationPlayState: 'paused',
          },
        }}
        aria-label="open chat"
      >
        <SmartToyIcon />
      </Fab>

      {/* Chat Overlay */}
      {isOpen && (
        <Box
          sx={{
            position: 'fixed',
            bottom: { xs: 80, md: 90 },
            right: { xs: 20, md: 30 },
            zIndex: 998,
            width: { xs: 'calc(100% - 40px)', sm: 400 },
            maxHeight: 600,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 5px 40px rgba(0,0,0,0.3)',
          }}
        >
          {/* Chat Header */}
          <Paper
            sx={{
              bgcolor: colors.primary,
              color: 'white',
              p: 2,
              borderRadius: 0,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {chatTitle}
            </Typography>
            <IconButton
              size="small"
              onClick={() => setIsOpen(false)}
              sx={{ color: 'white' }}
              aria-label="close chat"
            >
              <CloseIcon />
            </IconButton>
          </Paper>

          {/* Messages Container */}
          <Box
            ref={chatContainerRef}
            sx={{
              flex: 1,
              overflow: 'auto',
              p: 2,
              bgcolor: colors.background,
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
              minHeight: 300,
            }}
          >
            {messages.length === 0 && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: colors.textSecondary,
                    maxWidth: '90%',
                  }}
                >
                  {language === 'hr'
                    ? 'Zdravo! Kako vam mogu pomoći s našim uslugama?'
                    : 'Hello! How can I help you with our services?'}
                </Typography>
              </Box>
            )}

            {messages.map((message) => (
              <Box
                key={message.id}
                sx={{
                  display: 'flex',
                  justifyContent:
                    message.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <Paper
                  sx={{
                    maxWidth: '85%',
                    p: 1.5,
                    bgcolor:
                      message.role === 'user'
                        ? colors.primary
                        : colors.backgroundPaper,
                    color:
                      message.role === 'user'
                        ? 'white'
                        : colors.textPrimary,
                    borderRadius: 2,
                  }}
                >
                  <Box
                    sx={{
                      '& p': {
                        m: 0,
                        mb: 1,
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                        lineHeight: 1.6,
                      },
                      '& p:last-of-type': {
                        mb: 0,
                      },
                      '& ul, & ol': {
                        pl: 2.5,
                        my: 1,
                      },
                      '& li': {
                        mb: 0.5,
                      },
                      '& a': {
                        color: 'inherit',
                        textDecoration: 'underline',
                      },
                      '& code': {
                        fontFamily: 'Consolas, "Courier New", monospace',
                        fontSize: '0.85rem',
                        backgroundColor: message.role === 'user'
                          ? 'rgba(255,255,255,0.15)'
                          : colors.background,
                        padding: '2px 4px',
                        borderRadius: 4,
                      },
                      '& pre': {
                        fontFamily: 'Consolas, "Courier New", monospace',
                        fontSize: '0.85rem',
                        backgroundColor: message.role === 'user'
                          ? 'rgba(255,255,255,0.15)'
                          : colors.background,
                        padding: 8,
                        borderRadius: 6,
                        overflowX: 'auto',
                        whiteSpace: 'pre-wrap',
                      },
                      '& h1, & h2, & h3, & h4': {
                        fontWeight: 700,
                        marginTop: 8,
                        marginBottom: 6,
                      },
                      '& table': {
                        width: '100%',
                        borderCollapse: 'collapse',
                        marginTop: 8,
                        marginBottom: 8,
                        fontSize: '0.9rem',
                      },
                      '& th, & td': {
                        border: `1px solid ${colors.borderLight}`,
                        padding: '6px 8px',
                        textAlign: 'left',
                        verticalAlign: 'top',
                      },
                      '& th': {
                        backgroundColor: message.role === 'user'
                          ? 'rgba(255,255,255,0.12)'
                          : colors.background,
                        fontWeight: 600,
                      },
                      '& tbody tr:nth-of-type(odd)': {
                        backgroundColor: message.role === 'user'
                          ? 'rgba(255,255,255,0.06)'
                          : 'rgba(255,255,255,0.03)',
                      },
                    }}
                  >
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        a: ({ node, ...props }) => (
                          <a
                            {...props}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        ),
                        table: ({ node, ...props }) => (
                          <Box sx={{ overflowX: 'auto' }}>
                            <table {...props} />
                          </Box>
                        ),
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </Box>
                </Paper>
              </Box>
            ))}

            {/* Quick Reply Buttons */}
            {quickReplies.length > 0 && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  mt: 1,
                }}
              >
                {quickReplies.map((reply) => (
                  <Button
                    key={reply.id}
                    onClick={() => handleQuickReply(reply)}
                    disabled={isLoading}
                    sx={{
                      textAlign: 'left',
                      justifyContent: 'flex-start',
                      bgcolor: colors.backgroundPaper,
                      color: colors.textPrimary,
                      border: `1px solid ${colors.borderLight}`,
                      p: 1.5,
                      borderRadius: 1,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        bgcolor: colors.primary,
                        color: 'white',
                        borderColor: colors.primary,
                      },
                      '&:disabled': {
                        opacity: 0.6,
                      },
                    }}
                  >
                    {reply.label}
                  </Button>
                ))}
              </Box>
            )}

            {isLoading && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Paper
                  sx={{
                    p: 1.5,
                    bgcolor: colors.backgroundPaper,
                    borderRadius: 2,
                  }}
                >
                  <CircularProgress size={20} sx={{ color: colors.primary }} />
                </Paper>
              </Box>
            )}
          </Box>

          {/* Input Area */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: 2,
              bgcolor: colors.backgroundPaper,
              borderTop: `1px solid ${colors.borderLight}`,
              display: 'flex',
              gap: 1,
            }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder={chatPlaceholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: colors.textPrimary,
                  bgcolor: colors.background,
                  '& fieldset': {
                    borderColor: colors.borderLight,
                  },
                  '&:hover fieldset': {
                    borderColor: colors.primary,
                  },
                },
                '& .MuiOutlinedInput-input::placeholder': {
                  color: colors.textSecondary,
                  opacity: 0.7,
                },
              }}
            />
            <IconButton
              type="submit"
              disabled={isLoading || !input.trim()}
              sx={{
                bgcolor: colors.primary,
                color: 'white',
                '&:hover': {
                  bgcolor: colors.hoverPrimary,
                },
                '&:disabled': {
                  bgcolor: colors.borderLight,
                  color: colors.textSecondary,
                },
              }}
              aria-label="send message"
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      )}
    </>
  );
}
