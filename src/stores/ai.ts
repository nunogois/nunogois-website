import { atom } from 'nanostores'
import { UnleashClient } from 'unleash-proxy-client'

interface Message {
  role: 'ai' | 'user'
  message: string
}

export const LANGUAGE_GREETINGS: Record<string, string> = {
  en: 'Hi! My name is Nuno, how may I help?',
  'zh-CN': '你好！我叫Nuno，有什么可以帮助您的？',
  hi: 'नमस्ते! मेरा नाम नुनो है, कैसे मदद कर सकता हूँ?',
  es: '¡Hola! Mi nombre es Nuno, ¿en qué puedo ayudarte?',
  fr: "Salut! Je m'appelle Nuno, comment puis-je vous aider?",
  bn: 'হাই! আমার নাম নুনো, আমি কীভাবে সাহায্য করতে পারি?',
  ru: 'Привет! Меня зовут Нуно, как я могу вам помочь?',
  pt: 'Olá! O meu nome é Nuno, em que posso ajudar?',
  de: 'Hallo! Mein Name ist Nuno, wie kann ich Ihnen helfen?',
  ja: 'こんにちは！私の名前はNunoです、どのようにお手伝いできますか？',
  sw: 'Habari! Jina langu ni Nuno, je naweza kusaidiaje?',
  mr: 'हाय! माझं नाव नुनो आहे, माझ्या कडून तुमच्या साठी काही केल्या जाऊ शकतं?',
  te: 'హలో! నా పేరు నునో, నాకు ఎలా సహాయపడగలను?',
  tr: 'Merhaba! Benim adım Nuno, size nasıl yardımcı olabilirim?',
  ta: 'ஹலோ! என் பெயர் நுனோ, எப்படி உதவ முடியும்?',
  ko: '안녕하세요! 제 이름은 누노입니다, 어떻게 도와드릴까요?',
  it: 'Ciao! Il mio nome è Nuno, come posso aiutarti?',
  nl: 'Hallo! Mijn naam is Nuno, hoe kan ik je helpen?',
  pa: 'ਹੈਲੋ! ਮੇਰਾ ਨਾਮ ਨੁਨੋ ਹੈ, ਮੈਂ ਤੁਹਾਨੂੰ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?',
  jv: 'Halo! Jenenge aku Nuno, piye carane aku bisa mbantu sampeyan?',
  ms: 'Hai! Nama saya Nuno, bagaimana saya boleh membantu anda?',
  id: 'Halo! Nama saya Nuno, bagaimana saya bisa membantu Anda?',
  vi: 'Xin chào! Tên tôi là Nuno, tôi có thể giúp gì cho bạn?',
  tl: 'Hello! Ako si Nuno, paano kita matutulungan?',
  th: 'สวัสดี! ฉันชื่อ Nuno ฉันสามารถช่วยคุณได้อย่างไร?',
  gu: 'હાય! મારું નામ નુનો છે, હું તમારી મદદ કેવી રીતે કરી શકું?',
  kn: 'ಹಲೋ! ನನ್ನ ಹೆಸರು ನುನೋ, ನಾನು ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',
  ml: 'ഹലോ! എന്റെ പേര് നുനോ, എങ്ങനെ ഞാൻ സഹായിക്കാം?',
  or: 'ହାଲୋ! ମୋ ନାମ ନୁନୋ, ମୁଁ କେମିତି ସହାଯ୍ୟ କରିପାରେ?',
  uk: 'Привіт! Мене звати Нуно, як я можу вам допомогти?',
  pl: 'Cześć! Mam na imię Nuno, w czym mogę pomóc?',
  no: 'Hei! Jeg heter Nuno, hvordan kan jeg hjelpe deg?',
  sv: 'Hej! Jag heter Nuno, hur kan jag hjälpa dig?',
  da: 'Hej! Jeg hedder Nuno, hvordan kan jeg hjælpe dig?',
  fi: 'Hei! Nimeni on Nuno, miten voin auttaa sinua?',
  el: 'Γειά! Ονομάζομαι Nuno, πώς μπορώ να σας βοηθήσω;',
  cs: 'Ahoj! Jmenuji se Nuno, jak vám mohu pomoci?',
  sk: 'Ahoj! Volám sa Nuno, ako vám môžem pomôcť?',
  hu: 'Helló! Nuno vagyok, hogyan segíthetek?',
  ro: 'Salut! Mă numesc Nuno, cum vă pot ajuta?',
  bg: 'Здравейте! Казвам се Nuno, как мога да ви помогна?',
  hr: 'Pozdrav! Ja sam Nuno, kako vam mogu pomoći?',
  sr: 'Здраво! Ја сам Нуно, како могу да вам помогнем?',
  sl: 'Pozdravljeni! Sem Nuno, kako vam lahko pomagam?',
  lt: 'Sveiki! Aš vardu Nuno, kaip galiu jums padėti?',
  lv: 'Sveiki! Mans vārds ir Nuno, kā es varu jums palīdzēt?',
  et: 'Tere! Minu nimi on Nuno, kuidas ma saan teid aidata?',
  ga: 'Dia dhuit! Is mise Nuno, conas is féidir liom cabhrú leat?',
  mt: 'Bongu! Jisimni Nuno, kif nista’ ngħinek?',
  cy: 'Helo! Fy enw i yw Nuno, sut gallaf i helpu?',
  gd: 'Halò! Is mise Nuno, ciamar a tha mi gad chuideachadh?',
  is: 'Halló! Ég heiti Nuno, hvernig get ég aðstoðað þig?'
}

export const enabled = atom(false)
export const open = atom(false)
export const loaded = atom(false)
export const chatHistory = atom<Message[]>([])
export const typing = atom(false)

export const sendMessage = async (query: string) => {
  typing.set(true)

  let reply = `Sorry, I'm a bit tired for today. Let's try again tomorrow?`

  try {
    const response = await fetch(import.meta.env.PUBLIC_AI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query,
        chat_history: chatHistory.get().slice(0, -1)
      })
    })

    reply = await response.text()
  } catch (e) {}

  typing.set(false)

  setTimeout(
    () =>
      chatHistory.set([...chatHistory.get(), { role: 'ai', message: reply }]),
    200
  )
}

if (
  import.meta.env.PUBLIC_UNLEASH_URL &&
  import.meta.env.PUBLIC_UNLEASH_TOKEN
) {
  const unleash = new UnleashClient({
    url: import.meta.env.PUBLIC_UNLEASH_URL,
    clientKey: import.meta.env.PUBLIC_UNLEASH_TOKEN,
    refreshInterval: 15,
    appName: 'nunogois-website'
  })

  unleash.start()

  unleash.on('update', () => enabled.set(unleash.isEnabled('nunogois-ai-bun')))
}
