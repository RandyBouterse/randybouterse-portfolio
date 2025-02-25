
import { useEffect } from 'react';

declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: any) => void;
        open: () => void;
        close: () => void;
      };
    };
  }
}

const VoiceflowChat = () => {
  useEffect(() => {
    const v = document.createElement('script');
    const s = document.getElementsByTagName('script')[0];

    v.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '67bc497499bc896ade5221f5' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        voice: {
          url: "https://runtime-api.voiceflow.com"
        }
      });
    };

    v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    v.type = "text/javascript";
    s.parentNode?.insertBefore(v, s);

    return () => {
      // Cleanup: remove the script when component unmounts
      v.parentNode?.removeChild(v);
    };
  }, []);

  return null;
};

export default VoiceflowChat;
