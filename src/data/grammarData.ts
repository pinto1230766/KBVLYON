export interface GrammarLesson {
  id: number;
  title: {
    pt: string;
    cv: string;
  };
  content: {
    pt: string;
    cv: string;
  };
  examples: Array<{
    pt: string;
    cv: string;
  }>;
}

export const grammarLessons: GrammarLesson[] = [
  {
    id: 1,
    title: {
      pt: 'Pronomes Pessoais',
      cv: 'Pronomi Pesoal'
    },
    content: {
      pt: 'Os pronomes pessoais em cabo-verdiano são fundamentais para a comunicação básica. Eles são usados para se referir a pessoas e são diferentes do português em alguns aspectos. É importante notar que alguns pronomes têm múltiplas formas, dependendo da posição na frase e da ênfase desejada.',
      cv: 'Pronomi pesoal na kriolu é fundamental pa komunikason básiku. Es ta ser uzadu pa referi a pesoas y es é diferenti di purtuges na alguns aspetu. É importanti nota ma alguns pronomi ten múltiplas forma, dipendendu di pozison na frazi y di ênfazi dizejadu.'
    },
    examples: [
      {
        pt: 'Eu - N (forma curta), Mi (objeto), Ami (ênfase)',
        cv: 'Eu - N (forma kurtu), Mi (objetu), Ami (ênfazi)'
      },
      {
        pt: 'Tu - Bu (forma curta), Bo (objeto), Abo (ênfase)',
        cv: 'Tu - Bu (forma kurtu), Bo (objetu), Abo (ênfazi)'
      },
      {
        pt: 'Ele/Ela - El (forma básica), Ael (ênfase)',
        cv: 'Ele/Ela - El (forma básiku), Ael (ênfazi)'
      },
      {
        pt: 'Nós - Nu (forma curta), Nos (objeto), Anos (ênfase)',
        cv: 'Nós - Nu (forma kurtu), Nos (objetu), Anos (ênfazi)'
      },
      {
        pt: 'Vocês - Nhos (forma básica), Anhos (ênfase)',
        cv: 'Vocês - Nhos (forma básiku), Anhos (ênfazi)'
      },
      {
        pt: 'Eles/Elas - Es (forma básica), Aes (ênfase)',
        cv: 'Eles/Elas - Es (forma básiku), Aes (ênfazi)'
      },
      {
        pt: 'Eu vou - N ba',
        cv: 'Eu vou - N ba'
      },
      {
        pt: 'Tu vens - Bu ben',
        cv: 'Tu vens - Bu ben'
      },
      {
        pt: 'Ele/Ela está - El sta',
        cv: 'Ele/Ela está - El sta'
      },
      {
        pt: 'Nós estamos - Nu sta',
        cv: 'Nós estamos - Nu sta'
      },
      {
        pt: 'Vocês são - Nhos é',
        cv: 'Vocês são - Nhos é'
      },
      {
        pt: 'Eles/Elas têm - Es ten',
        cv: 'Eles/Elas têm - Es ten'
      },
      {
        pt: 'Eu sou - N é',
        cv: 'Eu sou - N é'
      },
      {
        pt: 'Tu és - Bu é',
        cv: 'Tu és - Bu é'
      },
      {
        pt: 'Ele/Ela é - El é',
        cv: 'Ele/Ela é - El é'
      },
      {
        pt: 'Nós somos - Nu é',
        cv: 'Nós somos - Nu é'
      },
      {
        pt: 'Vocês são - Nhos é',
        cv: 'Vocês são - Nhos é'
      },
      {
        pt: 'Eles/Elas são - Es é',
        cv: 'Eles/Elas são - Es é'
      },
      {
        pt: 'Eu posso - N pode',
        cv: 'Eu posso - N pode'
      },
      {
        pt: 'Tu queres - Bu kere',
        cv: 'Tu queres - Bu kere'
      },
      {
        pt: 'Ele/Ela sabe - El sabe',
        cv: 'Ele/Ela sabe - El sabe'
      },
      {
        pt: 'Nós queremos - Nu kere',
        cv: 'Nós queremos - Nu kere'
      },
      {
        pt: 'Vocês podem - Nhos pode',
        cv: 'Vocês podem - Nhos pode'
      },
      {
        pt: 'Eles/Elas sabem - Es sabe',
        cv: 'Eles/Elas sabem - Es sabe'
      }
    ]
  },
  {
    id: 2,
    title: {
      pt: 'Verbos no Presente',
      cv: 'Verbu na Prezenti'
    },
    content: {
      pt: 'Os verbos no presente em cabo-verdiano têm uma estrutura diferente do português. Em vez de conjugações complexas, usa-se a partícula "ta" antes do verbo para indicar ações habituais ou repetitivas. Para ações que estão acontecendo no momento, usa-se "sata" ou "sta ta".',
      cv: 'Verbu na prezenti na kriolu ten un strutura diferenti di purtuges. En vez di konjugasons komplexu, ta uza-se partíkula "ta" antis di verbu pa indika asons abitual ou repetitivu. Pa asons ki sta kontise na momentu, ta uza-se "sata" ou "sta ta".'
    },
    examples: [
      {
        pt: 'Eu falo - N ta fala (habitual) / N sata fala (agora)',
        cv: 'Eu falo - N ta fala (abitual) / N sata fala (gosi)'
      },
      {
        pt: 'Tu falas - Bu ta fala (habitual) / Bu sata fala (agora)',
        cv: 'Tu falas - Bu ta fala (abitual) / Bu sata fala (gosi)'
      },
      {
        pt: 'Ele/Ela fala - El ta fala (habitual) / El sata fala (agora)',
        cv: 'Ele/Ela fala - El ta fala (abitual) / El sata fala (gosi)'
      },
      {
        pt: 'Nós falamos - Nu ta fala (habitual) / Nu sata fala (agora)',
        cv: 'Nós falamos - Nu ta fala (abitual) / Nu sata fala (gosi)'
      },
      {
        pt: 'Vocês falam - Nhos ta fala (habitual) / Nhos sata fala (agora)',
        cv: 'Vocês falam - Nhos ta fala (abitual) / Nhos sata fala (gosi)'
      },
      {
        pt: 'Eles/Elas falam - Es ta fala (habitual) / Es sata fala (agora)',
        cv: 'Eles/Elas falam - Es ta fala (abitual) / Es sata fala (gosi)'
      },
      {
        pt: 'Eu como - N ta kume (todo dia) / N sata kume (agora)',
        cv: 'Eu como - N ta kume (tud dia) / N sata kume (gosi)'
      },
      {
        pt: 'Tu bebes - Bu ta bebe (sempre) / Bu sata bebe (neste momento)',
        cv: 'Tu bebes - Bu ta bebe (sempre) / Bu sata bebe (na momentu ki é)'
      },
      {
        pt: 'Ele dorme - El ta durmi (à noite) / El sata durmi (agora)',
        cv: 'Ele dorme - El ta durmi (na noiti) / El sata durmi (gosi)'
      },
      {
        pt: 'Nós trabalhamos - Nu ta trabadja (de segunda a sexta) / Nu sata trabadja (agora)',
        cv: 'Nós trabalhamos - Nu ta trabadja (di segunda te sesta) / Nu sata trabadja (gosi)'
      },
      {
        pt: 'Vocês estudam - Nhos ta studa (todos os dias) / Nhos sata studa (neste instante)',
        cv: 'Vocês estudam - Nhos ta studa (tud dia) / Nhos sata studa (na momentu ki é)'
      },
      {
        pt: 'Eles correm - Es ta korre (de manhã) / Es sata korre (agora)',
        cv: 'Eles correm - Es ta korre (di manhan) / Es sata korre (gosi)'
      },
      {
        pt: 'Eu leio - N ta le (livros) / N sata le (um livro)',
        cv: 'Eu leio - N ta le (livru) / N sata le (un livru)'
      },
      {
        pt: 'Tu escreves - Bu ta skrebe (cartas) / Bu sata skrebe (uma carta)',
        cv: 'Tu escreves - Bu ta skrebe (karta) / Bu sata skrebe (un karta)'
      },
      {
        pt: 'Ela canta - El ta kanta (bem) / El sata kanta (agora)',
        cv: 'Ela canta - El ta kanta (dretu) / El sata kanta (gosi)'
      },
      {
        pt: 'Nós nadamos - Nu ta nada (na piscina) / Nu sata nada (agora)',
        cv: 'Nós nadamos - Nu ta nada (na pisina) / Nu sata nada (gosi)'
      },
      {
        pt: 'Vocês dançam - Nhos ta dunsa (nas festas) / Nhos sata dunsa (agora)',
        cv: 'Vocês dançam - Nhos ta dunsa (na festa) / Nhos sata dunsa (gosi)'
      },
      {
        pt: 'Eles andam - Es ta anda (de bicicleta) / Es sata anda (agora)',
        cv: 'Eles andam - Es ta anda (di bisikleta) / Es sata anda (gosi)'
      },
      {
        pt: 'Eu vejo - N ta odja (bem) / N sata odja (agora)',
        cv: 'Eu vejo - N ta odja (dretu) / N sata odja (gosi)'
      },
      {
        pt: 'Tu ouves - Bu ta obi (música) / Bu sata obi (agora)',
        cv: 'Tu ouves - Bu ta obi (múzika) / Bu sata obi (gosi)'
      },
      {
        pt: 'Ela sente - El ta sinti (frio) / El sata sinti (agora)',
        cv: 'Ela sente - El ta sinti (frio) / El sata sinti (gosi)'
      },
      {
        pt: 'Nós sabemos - Nu ta sabe (a resposta) / Nu sata pensa (nisto)',
        cv: 'Nós sabemos - Nu ta sabe (resposta) / Nu sata pensa (na kes li)'
      },
      {
        pt: 'Vocês querem - Nhos ta kere (sair) / Nhos sata kere (agora)',
        cv: 'Vocês querem - Nhos ta kere (sai) / Nhos sata kere (gosi)'
      },
      {
        pt: 'Eles podem - Es ta pode (ajudar) / Es sata pode (fazer agora)',
        cv: 'Eles podem - Es ta pode (djuda) / Es sata pode (faze gosi)'
      },
      {
        pt: 'Eu devo - N ta deve (estudar) / N sata deve (ir agora)',
        cv: 'Eu devo - N ta deve (studu) / N sata deve (bai gosi)'
      },
      {
        pt: 'Tu vais - Bu ta ba (à escola) / Bu sata ba (agora)',
        cv: 'Tu vais - Bu ta ba (skola) / Bu sata ba (gosi)'
      },
      {
        pt: 'Ela vem - El ta ben (tarde) / El sata ben (agora)',
        cv: 'Ela vem - El ta ben (tardi) / El sata ben (gosi)'
      },
      {
        pt: 'Nós fazemos - Nu ta faze (comida) / Nu sata faze (agora)',
        cv: 'Nós fazemos - Nu ta faze (kumida) / Nu sata faze (gosi)'
      },
      {
        pt: 'Vocês dizem - Nhos ta fla (sempre) / Nhos sata fla (agora)',
        cv: 'Vocês dizem - Nhos ta fla (sempre) / Nhos sata fla (gosi)'
      },
      {
        pt: 'Eles dão - Es ta da (dinheiro) / Es sata da (agora)',
        cv: 'Eles dão - Es ta da (dineru) / Es sata da (gosi)'
      }
    ]
  },
  {
    id: 3,
    title: {
      pt: 'Verbos no Passado',
      cv: 'Verbu na Pasadu'
    },
    content: {
      pt: 'O passado em cabo-verdiano é mais simples que em português. Para ações concluídas, usa-se o verbo sem partícula ou com "dja" para enfatizar que a ação já aconteceu. Para ações habituais no passado, usa-se "ta" + verbo.',
      cv: 'Pasadu na kriolu é más simplis ki na purtuges. Pa asons konkluídu, ta uza-se verbu sen partíkula ou ku "dja" pa enfatiza ma ason dja kontise. Pa asons abitual na pasadu, ta uza-se "ta" + verbu.'
    },
    examples: [
      {
        pt: 'Eu falei - N fala / N dja fala',
        cv: 'Eu falei - N fala / N dja fala'
      },
      {
        pt: 'Tu falaste - Bu fala / Bu dja fala',
        cv: 'Tu falaste - Bu fala / Bu dja fala'
      },
      {
        pt: 'Ele/Ela falou - El fala / El dja fala',
        cv: 'Ele/Ela falou - El fala / El dja fala'
      },
      {
        pt: 'Nós falávamos (habitualmente) - Nu ta falaba',
        cv: 'Nós falávamos (abitualmente) - Nu ta falaba'
      },
      {
        pt: 'Vocês falaram - Nhos fala / Nhos dja fala',
        cv: 'Vocês falaram - Nhos fala / Nhos dja fala'
      },
      {
        pt: 'Eles/Elas falaram - Es fala / Es dja fala',
        cv: 'Eles/Elas falaram - Es fala / Es dja fala'
      },
      {
        pt: 'Eu comi - N kume / N dja kume',
        cv: 'Eu comi - N kume / N dja kume'
      },
      {
        pt: 'Tu bebeste - Bu bebe / Bu dja bebe',
        cv: 'Tu bebeste - Bu bebe / Bu dja bebe'
      },
      {
        pt: 'Ele dormiu - El durmi / El dja durmi',
        cv: 'Ele dormiu - El durmi / El dja durmi'
      },
      {
        pt: 'Nós trabalhamos - Nu trabadja / Nu dja trabadja',
        cv: 'Nós trabalhamos - Nu trabadja / Nu dja trabadja'
      },
      {
        pt: 'Vocês estudaram - Nhos studa / Nhos dja studa',
        cv: 'Vocês estudaram - Nhos studa / Nhos dja studa'
      },
      {
        pt: 'Eles correram - Es korre / Es dja korre',
        cv: 'Eles correram - Es korre / Es dja korre'
      },
      {
        pt: 'Eu li - N le / N dja le',
        cv: 'Eu li - N le / N dja le'
      },
      {
        pt: 'Tu escreveste - Bu skrebe / Bu dja skrebe',
        cv: 'Tu escreveste - Bu skrebe / Bu dja skrebe'
      },
      {
        pt: 'Ela canta - El kanta / El dja kanta',
        cv: 'Ela canta - El kanta / El dja kanta'
      },
      {
        pt: 'Nós nadamos - Nu nada / Nu dja nada',
        cv: 'Nós nadamos - Nu nada / Nu dja nada'
      },
      {
        pt: 'Vocês dançaram - Nhos dunsa / Nhos dja dunsa',
        cv: 'Vocês dançaram - Nhos dunsa / Nhos dja dunsa'
      },
      {
        pt: 'Eles andam - Es ta anda / Es dja anda',
        cv: 'Eles andam - Es ta anda / Es dja anda'
      },
      {
        pt: 'Eu vejo - N ta odja (bem) / N sata odja (agora)',
        cv: 'Eu vejo - N ta odja (dretu) / N sata odja (gosi)'
      },
      {
        pt: 'Tu ouves - Bu ta obi (música) / Bu sata obi (agora)',
        cv: 'Tu ouves - Bu ta obi (múzika) / Bu sata obi (gosi)'
      },
      {
        pt: 'Ela sente - El ta sinti (frio) / El sata sinti (agora)',
        cv: 'Ela sente - El ta sinti (frio) / El sata sinti (gosi)'
      },
      {
        pt: 'Nós soubemos - Nu sabe / Nu dja sabe',
        cv: 'Nós soubemos - Nu sabe / Nu dja sabe'
      },
      {
        pt: 'Vocês quiseram - Nhos kere / Nhos dja kere',
        cv: 'Vocês quiseram - Nhos kere / Nhos dja kere'
      },
      {
        pt: 'Eles puderam - Es pode / Es dja pode',
        cv: 'Eles puderam - Es pode / Es dja pode'
      },
      {
        pt: 'Eu devi - N deve / N dja deve',
        cv: 'Eu devi - N deve / N dja deve'
      },
      {
        pt: 'Tu foste - Bu ba / Bu dja ba',
        cv: 'Tu foste - Bu ba / Bu dja ba'
      },
      {
        pt: 'Ela veio - El ben / El dja ben',
        cv: 'Ela veio - El ben / El dja ben'
      },
      {
        pt: 'Nós fizemos - Nu faze / Nu dja faze',
        cv: 'Nós fizemos - Nu faze / Nu dja faze'
      },
      {
        pt: 'Vocês disseram - Nhos fla / Nhos dja fla',
        cv: 'Vocês disseram - Nhos fla / Nhos dja fla'
      },
      {
        pt: 'Eles dão - Es ta da (dinheiro) / Es sata da (agora)',
        cv: 'Eles dão - Es ta da (dineru) / Es sata da (gosi)'
      }
    ]
  },
  {
    id: 4,
    title: {
      pt: 'Verbos no Futuro',
      cv: 'Verbu na Futuru'
    },
    content: {
      pt: 'O futuro em cabo-verdiano pode ser expresso de várias formas. A mais comum é usar "ta" + verbo ou "ta ba" + verbo. Também se pode usar "al" (contração de "ta" + "ba") antes do verbo.',
      cv: 'Futuru na kriolu pode ser spresu di várias forma. Más komun é uza "ta" + verbu ou "ta ba" + verbu. Tanbe pode uza "al" (kontrason di "ta" + "ba") antis di verbu.'
    },
    examples: [
      {
        pt: 'Eu vou falar - N ta fala / N ta ba fala / N al fala',
        cv: 'Eu vou falar - N ta fala / N ta ba fala / N al fala'
      },
      {
        pt: 'Tu vais falar - Bu ta fala / Bu ta ba fala / Bu al fala',
        cv: 'Tu vais falar - Bu ta fala / Bu ta ba fala / Bu al fala'
      },
      {
        pt: 'Ele/Ela vai falar - El ta fala / El ta ba fala / El al fala',
        cv: 'Ele/Ela vai falar - El ta fala / El ta ba fala / El al fala'
      },
      {
        pt: 'Nós vamos falar - Nu ta fala / Nu ta ba fala / Nu al fala',
        cv: 'Nós vamos falar - Nu ta fala / Nu ta ba fala / Nu al fala'
      },
      {
        pt: 'Vocês vão falar - Nhos ta fala / Nhos ta ba fala / Nhos al fala',
        cv: 'Vocês vão falar - Nhos ta fala / Nhos ta ba fala / Nhos al fala'
      },
      {
        pt: 'Eles/Elas vão falar - Es ta fala / Es ta ba fala / Es al fala',
        cv: 'Eles/Elas vão falar - Es ta fala / Es ta ba fala / Es al fala'
      },
      {
        pt: 'Eu vou comer - N ta kume / N ta ba kume / N al kume',
        cv: 'Eu vou comer - N ta kume / N ta ba kume / N al kume'
      },
      {
        pt: 'Tu vais beber - Bu ta bebe / Bu ta ba bebe / Bu al bebe',
        cv: 'Tu vais beber - Bu ta bebe / Bu ta ba bebe / Bu al bebe'
      },
      {
        pt: 'Ele vai dormir - El ta durmi / El ta ba durmi / El al durmi',
        cv: 'Ele vai dormir - El ta durmi / El ta ba durmi / El al durmi'
      },
      {
        pt: 'Nós vamos trabalhar - Nu ta trabadja / Nu ta ba trabadja / Nu al trabadja',
        cv: 'Nós vamos trabalhar - Nu ta trabadja / Nu ta ba trabadja / Nu al trabadja'
      },
      {
        pt: 'Vocês vão estudar - Nhos ta studa / Nhos ta ba studa / Nhos al studa',
        cv: 'Vocês vão estudar - Nhos ta studa / Nhos ta ba studa / Nhos al studa'
      },
      {
        pt: 'Eles vão correr - Es ta korre / Es ta ba korre / Es al korre',
        cv: 'Eles vão correr - Es ta korre / Es ta ba korre / Es al korre'
      },
      {
        pt: 'Eu vou ler - N ta le / N ta ba le / N al le',
        cv: 'Eu vou ler - N ta le / N ta ba le / N al le'
      },
      {
        pt: 'Tu vais escrever - Bu ta skrebe / Bu ta ba skrebe / Bu al skrebe',
        cv: 'Tu vais escrever - Bu ta skrebe / Bu ta ba skrebe / Bu al skrebe'
      },
      {
        pt: 'Ela vai cantar - El ta kanta / El ta ba kanta / El al kanta',
        cv: 'Ela vai cantar - El ta kanta / El ta ba kanta / El al kanta'
      },
      {
        pt: 'Nós vamos nadar - Nu ta nada / Nu ta ba nada / Nu al nada',
        cv: 'Nós vamos nadar - Nu ta nada / Nu ta ba nada / Nu al nada'
      },
      {
        pt: 'Vocês vão dançar - Nhos ta dunsa / Nhos ta ba dunsa / Nhos al dunsa',
        cv: 'Vocês vão dançar - Nhos ta dunsa / Nhos ta ba dunsa / Nhos al dunsa'
      },
      {
        pt: 'Eles vão andar - Es ta anda / Es ta ba anda / Es al anda',
        cv: 'Eles vão andar - Es ta anda / Es ta ba anda / Es al anda'
      },
      {
        pt: 'Eu vou ver - N ta odja / N ta ba odja / N al odja',
        cv: 'Eu vou ver - N ta odja / N ta ba odja / N al odja'
      },
      {
        pt: 'Tu vais ouvir - Bu ta obi / Bu ta ba obi / Bu al obi',
        cv: 'Tu vais ouvir - Bu ta obi / Bu ta ba obi / Bu al obi'
      },
      {
        pt: 'Ela vai sentir - El ta sinti / El ta ba sinti / El al sinti',
        cv: 'Ela vai sentir - El ta sinti / El ta ba sinti / El al sinti'
      },
      {
        pt: 'Nós vamos saber - Nu ta sabe / Nu ta ba sabe / Nu al sabe',
        cv: 'Nós vamos saber - Nu ta sabe / Nu ta ba sabe / Nu al sabe'
      },
      {
        pt: 'Vocês vão querer - Nhos ta kere / Nhos ta ba kere / Nhos al kere',
        cv: 'Vocês vão querer - Nhos ta kere / Nhos ta ba kere / Nhos al kere'
      },
      {
        pt: 'Eles vão poder - Es ta pode / Es ta ba pode / Es al pode',
        cv: 'Eles vão poder - Es ta pode / Es ta ba pode / Es al pode'
      },
      {
        pt: 'Eu devo - N ta deve (estudar) / N sata deve (ir agora)',
        cv: 'Eu devo - N ta deve (studu) / N sata deve (bai gosi)'
      },
      {
        pt: 'Tu vais - Bu ta ba (à escola) / Bu sata ba (agora)',
        cv: 'Tu vais - Bu ta ba (skola) / Bu sata ba (gosi)'
      },
      {
        pt: 'Ela vem - El ta ben (tarde) / El sata ben (agora)',
        cv: 'Ela vem - El ta ben (tardi) / El sata ben (gosi)'
      },
      {
        pt: 'Nós fazemos - Nu ta faze (comida) / Nu sata faze (agora)',
        cv: 'Nós fazemos - Nu ta faze (kumida) / Nu sata faze (gosi)'
      },
      {
        pt: 'Vocês dizem - Nhos ta fla (sempre) / Nhos sata fla (agora)',
        cv: 'Vocês dizem - Nhos ta fla (sempre) / Nhos sata fla (gosi)'
      },
      {
        pt: 'Eles dão - Es ta da (dinheiro) / Es sata da (agora)',
        cv: 'Eles dão - Es ta da (dineru) / Es sata da (gosi)'
      }
    ]
  },
  {
    id: 5,
    title: {
      pt: 'Negação',
      cv: 'Negason'
    },
    content: {
      pt: 'A negação em cabo-verdiano é feita principalmente com a partícula "ka" antes do verbo. É importante notar que a posição do "ka" pode variar dependendo do tempo verbal e das partículas usadas.',
      cv: 'Negason na kriolu é fetu prinsipalmenti ku partíkula "ka" antis di verbu. É importanti nota ma pozison di "ka" pode varia dipendendu di tempu verbal y di partíkulas uzadu.'
    },
    examples: [
      {
        pt: 'Eu não falo - N ka ta fala',
        cv: 'Eu não falo - N ka ta fala'
      },
      {
        pt: 'Tu não falaste - Bu ka fala',
        cv: 'Tu não falaste - Bu ka fala'
      },
      {
        pt: 'Ele/Ela não vai falar - El ka ta fala',
        cv: 'Ele/Ela não vai falar - El ka ta fala'
      },
      {
        pt: 'Nós não estamos falando - Nu ka sata fala',
        cv: 'Nós não estamos falando - Nu ka sata fala'
      },
      {
        pt: 'Vocês não falaram - Nhos ka fala',
        cv: 'Vocês não falaram - Nhos ka fala'
      },
      {
        pt: 'Eles/Elas não vão falar - Es ka ta fala',
        cv: 'Eles/Elas não vão falar - Es ka ta fala'
      },
      {
        pt: 'Eu não como - N ka ta kume',
        cv: 'Eu não como - N ka ta kume'
      },
      {
        pt: 'Tu não bebeste - Bu ka bebe',
        cv: 'Tu não bebeste - Bu ka bebe'
      },
      {
        pt: 'Ele não vai dormir - El ka ta durmi',
        cv: 'Ele não vai dormir - El ka ta durmi'
      },
      {
        pt: 'Nós não estamos trabalhando - Nu ka sata trabadja',
        cv: 'Nós não estamos trabalhando - Nu ka sata trabadja'
      },
      {
        pt: 'Vocês não estudaram - Nhos ka studa',
        cv: 'Vocês não estudaram - Nhos ka studa'
      },
      {
        pt: 'Eles não correm - Es ka ta korre',
        cv: 'Eles não correm - Es ka ta korre'
      },
      {
        pt: 'Eu não li - N ka le',
        cv: 'Eu não li - N ka le'
      },
      {
        pt: 'Tu não escreveste - Bu ka skrebe',
        cv: 'Tu não escreveste - Bu ka skrebe'
      },
      {
        pt: 'Ela não vai cantar - El ka ta kanta',
        cv: 'Ela não vai cantar - El ka ta kanta'
      },
      {
        pt: 'Nós não nadamos - Nu ka nada',
        cv: 'Nós não nadamos - Nu ka nada'
      },
      {
        pt: 'Vocês não dançaram - Nhos ka dunsa',
        cv: 'Vocês não dançaram - Nhos ka dunsa'
      },
      {
        pt: 'Eles não andam - Es ka ta anda',
        cv: 'Eles não andam - Es ka ta anda'
      },
      {
        pt: 'Eu não vejo - N ka ta odja',
        cv: 'Eu não vejo - N ka ta odja'
      },
      {
        pt: 'Tu não ouviste - Bu ka obi',
        cv: 'Tu não ouviste - Bu ka obi'
      },
      {
        pt: 'Ela não sente - El ta sinti',
        cv: 'Ela não sente - El ta sinti (frio) / El sata sinti (gosi)'
      },
      {
        pt: 'Nós não sabemos - Nu ka sabe',
        cv: 'Nós não sabemos - Nu ka sabe'
      },
      {
        pt: 'Vocês não quiseram - Nhos ka kere',
        cv: 'Vocês não quiseram - Nhos ka kere'
      },
      {
        pt: 'Eles não podem - Es ka pode',
        cv: 'Eles não podem - Es ka pode'
      },
      {
        pt: 'Eu não devo - N ka deve',
        cv: 'Eu devo - N ka deve'
      },
      {
        pt: 'Tu não foste - Bu ka ba',
        cv: 'Tu não foste - Bu ka ba'
      },
      {
        pt: 'Ela não veio - El ka ben',
        cv: 'Ela não veio - El ka ben'
      },
      {
        pt: 'Nós não fizemos - Nu ka faze',
        cv: 'Nós não fizemos - Nu ka faze'
      },
      {
        pt: 'Vocês não disseram - Nhos ka fla',
        cv: 'Vocês não disseram - Nhos ka fla'
      },
      {
        pt: 'Eles não deram - Es ka da',
        cv: 'Eles não deram - Es ka da'
      }
    ]
  },
  {
    id: 6,
    title: {
      pt: 'Perguntas',
      cv: 'Perguntas'
    },
    content: {
      pt: 'As perguntas em cabo-verdiano podem ser feitas de várias formas. Pode-se usar palavras interrogativas no início da frase ou simplesmente mudar a entonação. As palavras interrogativas mais comuns são "kuze" (o que), "kenha" (quem), "undi" (onde), "pamodi" (por que), "kantu" (quando) e "modi" (como).',
      cv: 'Perguntas na kriolu pode ser fetu di várias forma. Pode uza palavras interrogativa na inísiu di frazi ou simplesmente muda entonason. Palavras interrogativa más komun é "kuze" (o que), "kenha" (quem), "undi" (onde), "pamodi" (por que), "kantu" (quando) y "modi" (como).'
    },
    examples: [
      {
        pt: 'O que é isso? - Kuze ki é kel-li?',
        cv: 'O que é isso? - Kuze ki é kel-li?'
      },
      {
        pt: 'Quem é você? - Kenha ki é bo?',
        cv: 'Quem é você? - Kenha ki é bo?'
      },
      {
        pt: 'Onde você mora? - Undi ki bu ta mora?',
        cv: 'Onde você mora? - Undi ki bu ta mora?'
      },
      {
        pt: 'Por que você está aqui? - Pamodi ki bu sta li?',
        cv: 'Por que você está aqui? - Pamodi ki bu sta li?'
      },
      {
        pt: 'Quando você vai? - Kantu ki bu ta bai?',
        cv: 'Quando você vai? - Kantu ki bu ta bai?'
      },
      {
        pt: 'Como você está? - Modi ki bu sta?',
        cv: 'Como você está? - Modi ki bu sta?'
      },
      {
        pt: 'O que você está fazendo? - Kuze ki bu sta faze?',
        cv: 'O que você está fazendo? - Kuze ki bu sta faze?'
      },
      {
        pt: 'Quem é ele/ela? - Kenha ki é el?',
        cv: 'Quem é ele/ela? - Kenha ki é el?'
      },
      {
        pt: 'Onde fica o banheiro? - Undi ki banheiru ta fika?',
        cv: 'Onde fica o banheiro? - Undi ki banheiru ta fika?'
      },
      {
        pt: 'Por que você não veio? - Pamodi ki bu ka ben?',
        cv: 'Por que você não veio? - Pamodi ki bu ka ben?'
      },
      {
        pt: 'Quando você volta? - Kantu ki bu ta torna?',
        cv: 'Quando você volta? - Kantu ki bu ta torna?'
      },
      {
        pt: 'Como se diz em crioulo? - Modi ki ta fla na kriolu?',
        cv: 'Como se diz em crioulo? - Modi ki ta fla na kriolu?'
      },
      {
        pt: 'O que você quer comer? - Kuze ki bu kere kume?',
        cv: 'O que você quer comer? - Kuze ki bu kere kume?'
      },
      {
        pt: 'Quem está na porta? - Kenha ki sta na porta?',
        cv: 'Quem está na porta? - Kenha ki sta na porta?'
      },
      {
        pt: 'Onde você trabalha? - Undi ki bu ta trabadja?',
        cv: 'Onde você trabalha? - Undi ki bu ta trabadja?'
      },
      {
        pt: 'Por que você está triste? - Pamodi ki bu sta tristi?',
        cv: 'Por que você está triste? - Pamodi ki bu sta tristi?'
      },
      {
        pt: 'Quando é seu aniversário? - Kantu ki é aniversariu di bo?',
        cv: 'Quando é seu aniversário? - Kantu ki é aniversariu di bo?'
      },
      {
        pt: 'Como se chama isso? - Modi ki bu ta chama kel-li?',
        cv: 'Como se chama isso? - Modi ki bu ta chama kel-li?'
      },
      {
        pt: 'O que você vai fazer amanhã? - Kuze ki bu ta ba fala manhã?',
        cv: 'O que você vai fazer amanhã? - Kuze ki bu ta ba fala manhã?'
      },
      {
        pt: 'Quem são eles? - Kenha ki es é?',
        cv: 'Quem são eles? - Kenha ki es é?'
      },
      {
        pt: 'Onde você nasceu? - Undi ki bu nasce?',
        cv: 'Onde você nasceu? - Undi ki bu nasce?'
      },
      {
        pt: 'Por que você está rindo? - Pamodi ki bu sta ri?',
        cv: 'Por que você está rindo? - Pamodi ki bu sta ri?'
      },
      {
        pt: 'Quando você chega? - Kantu ki bu ta txiga?',
        cv: 'Quando você chega? - Kantu ki bu ta txiga?'
      },
      {
        pt: 'Como está o tempo? - Modi ki tempu sta?',
        cv: 'Como está o tempo? - Modi ki tempu sta?'
      },
      {
        pt: 'O que você acha? - Kuze ki bu ta atxa?',
        cv: 'O que você acha? - Kuze ki bu ta atxa?'
      },
      {
        pt: 'Quem te contou? - Kenha ki konta-bo?',
        cv: 'Quem te contou? - Kenha ki konta-bo?'
      }
    ]
  },
  {
    id: 7,
    title: {
      pt: 'Possessivos',
      cv: 'Posesivu'
    },
    content: {
      pt: 'Os possessivos em cabo-verdiano são diferentes do português. Eles podem vir antes ou depois do substantivo e têm formas diferentes dependendo da posição. Quando vêm depois do substantivo, usam-se formas como "di meu", "di bo", etc.',
      cv: 'Posesivu na kriolu é diferenti di purtuges. Es pode ben antis ou dipos di substantivu y ten formas diferenti dipendendu di pozison. Kantu ta ben dipos di substantivu, ta uza-se formas sima "di meu", "di bo", etc.'
    },
    examples: [
      {
        pt: 'Meu livro / Livro di meu - Nha livru / Livru di meu',
        cv: 'Meu livro / Livro di meu - Nha livru / Livru di meu'
      },
      {
        pt: 'Teu livro / Livro di bo - Bu livru / Livru di bo',
        cv: 'Teu livro / Livro di bo - Bu livru / Livru di bo'
      },
      {
        pt: 'Seu livro (dele/dela) / Livro di sel - Si livru / Livru di sel',
        cv: 'Seu livro (dele/dela) / Livro di sel - Si livru / Livru di sel'
      },
      {
        pt: 'Nosso livro / Livro di nos - Nos livru / Livru di nos',
        cv: 'Nósso livro / Livro di nos - Nos livru / Livru di nos'
      },
      {
        pt: 'Vosso livro / Livro di nhos - Nhos livru / Livru di nhos',
        cv: 'Vosso livro / Livro di nhos - Nhos livru / Livru di nhos'
      },
      {
        pt: 'Livro deles/delas / Livro di ses - Ses livru / Livru di ses',
        cv: 'Livro deles/delas / Livro di ses - Ses livru / Livru di ses'
      },
      {
        pt: 'Minha casa / Casa di meu - Nha kaza / Kaza di meu',
        cv: 'Minha casa / Casa di meu - Nha kaza / Kaza di meu'
      },
      {
        pt: 'Tua caneta / Caneta di bo - Bu kaneta / Kaneta di bo',
        cv: 'Tua caneta / Caneta di bo - Bu kaneta / Kaneta di bo'
      },
      {
        pt: 'Seu carro / Carro di sel - Si karu / Karu di sel',
        cv: 'Seu carro / Carro di sel - Si karu / Karu di sel'
      },
      {
        pt: 'Nossa família / Família di nos - Nos família / Família di nos',
        cv: 'Nossa família / Família di nos - Nos família / Família di nos'
      },
      {
        pt: 'Vossos amigos / Amigos di nhos - Nhos amigus / Amigus di nhos',
        cv: 'Vossos amigos / Amigos di nhos - Nhos amigus / Amigus di nhos'
      },
      {
        pt: 'Seus livros / Livros di ses - Ses livrus / Livrus di ses',
        cv: 'Seus livros / Livros di ses - Ses livrus / Livrus di ses'
      },
      {
        pt: 'Meu telefone / Telefone di meu - Nha telefon / Telefon di meu',
        cv: 'Meu telefone / Telefone di meu - Nha telefon / Telefon di meu'
      },
      {
        pt: 'Teu irmão / Irmão di bo - Bu irmon / Irmon di bo',
        cv: 'Teu irmão / Irmão di bo - Bu irmon / Irmon di bo'
      },
      {
        pt: 'Sua irmã / Irmã di sel - Si irmon / Irmon di sel',
        cv: 'Sua irmã / Irmã di sel - Si irmon / Irmon di sel'
      },
      {
        pt: 'Nosso pai / Pai di nos - Nos pai / Pai di nos',
        cv: 'Nosso pai / Pai di nos - Nos pai / Pai di nos'
      },
      {
        pt: 'Vossa mãe / Mãe di nhos - Nhos mai / Mai di nhos',
        cv: 'Vossa mãe / Mãe di nhos - Nhos mai / Mai di nhos'
      },
      {
        pt: 'Seu filho / Filho di sel - Si fidju / Fidju di sel',
        cv: 'Seu filho / Filho di sel - Si fidju / Fidju di sel'
      },
      {
        pt: 'Minha filha / Filha di meu - Nha fida / Fida di meu',
        cv: 'Minha filha / Filha di meu - Nha fida / Fida di meu'
      },
      {
        pt: 'Teu amigo / Amigo di bo - Bu amigu / Amigu di bo',
        cv: 'Teu amigo / Amigo di bo - Bu amigu / Amigu di bo'
      },
      {
        pt: 'Sua amiga / Amiga di sel - Si amiga / Amiga di sel',
        cv: 'Sua amiga / Amiga di sel - Si amiga / Amiga di sel'
      },
      {
        pt: 'Nosso trabalho / Trabalho di nos - Nos trabadju / Trabadju di nos',
        cv: 'Nosso trabalho / Trabalho di nos - Nos trabadju / Trabadju di nos'
      },
      {
        pt: 'Vossa casa / Casa di nhos - Nhos kaza / Kaza di nhos',
        cv: 'Vossa casa / Casa di nhos - Nhos kaza / Kaza di nhos'
      },
      {
        pt: 'Seus sapatos / Sapatos di ses - Ses sapatus / Sapatus di ses',
        cv: 'Seus sapatos / Sapatos di ses - Ses sapatus / Sapatus di ses'
      },
      {
        pt: 'Meu dinheiro / Dinheiro di meu - Nha dinheru / Dineru di meu',
        cv: 'Meu dinheiro / Dinheiro di meu - Nha dinheru / Dineru di meu'
      },
      {
        pt: 'Teu celular / Celular di bo - Bu telefon selular / Telefon selular di bo',
        cv: 'Teu celular / Celular di bo - Bu telefon selular / Telefon selular di bo'
      },
      {
        pt: 'Sua chave / Chave di sel - Si xabi / Xabi di sel',
        cv: 'Sua chave / Chave di sel - Si xabi / Xabi di sel'
      }
    ]
  },
  {
    id: 8,
    title: {
      pt: 'Demonstrativos',
      cv: 'Demonstrativu'
    },
    content: {
      pt: 'Os demonstrativos em cabo-verdiano são usados para indicar a posição de objetos ou pessoas em relação ao falante. As formas principais são "kel" (esse/aquele), "kes" (esses/aqueles), "kel-li" (este), "kel-la" (aquele), "kes-li" (estes) e "kes-la" (aqueles).',
      cv: 'Demonstrativu na kriolu é uzadu pa indika pozison di objetus ou pesoas en relason a falanti. Formas prinsipal é "kel" (esse/aquele), "kes" (esses/aqueles), "kel-li" (este), "kel-la" (aquele), "kes-li" (estes) y "kes-la" (aqueles).'
    },
    examples: [
      {
        pt: 'Este livro - Kel-li livru',
        cv: 'Este livro - Kel-li livru'
      },
      {
        pt: 'Esse/Aquele livro - Kel livru / Kel-la livru',
        cv: 'Esse/Aquele livro - Kel livru / Kel-la livru'
      },
      {
        pt: 'Estes livros - Kes-li livru',
        cv: 'Estes livros - Kes-li livru'
      },
      {
        pt: 'Esses/Aqueles livros - Kes livru / Kes-la livru',
        cv: 'Esses/Aqueles livros - Kes livru / Kes-la livru'
      },
      {
        pt: 'Esta pessoa - Kel-li pesoa',
        cv: 'Esta pessoa - Kel-li pesoa'
      },
      {
        pt: 'Aquelas pessoas - Kes-la pesoa',
        cv: 'Aquelas pessoas - Kes-la pesoa'
      },
      {
        pt: 'Esta casa - Kel-li kaza',
        cv: 'Esta casa - Kel-li kaza'
      },
      {
        pt: 'Aquele carro - Kel-la karu',
        cv: 'Aquele carro - Kel-la karu'
      },
      {
        pt: 'Estas canetas - Kes-li kanetas',
        cv: 'Estas canetas - Kes-li kanetas'
      },
      {
        pt: 'Aqueles prédios - Kes-la prédius',
        cv: 'Aqueles prédios - Kes-la prédius'
      },
      {
        pt: 'Este lugar - Kel-li lugar',
        cv: 'Este lugar - Kel-li lugar'
      },
      {
        pt: 'Aquela menina - Kel-la minina',
        cv: 'Aquela menina - Kel-la minina'
      },
      {
        pt: 'Estes sapatos - Kes-li sapatus',
        cv: 'Estes sapatos - Kes-li sapatus'
      },
      {
        pt: 'Aquelas cadeiras - Kes-la kadera',
        cv: 'Aquelas cadeiras - Kes-la kadera'
      },
      {
        pt: 'Este telefone - Kel-li telefon',
        cv: 'Este telefone - Kel-li telefon'
      },
      {
        pt: 'Aquele homem - Kel-la omi',
        cv: 'Aquele homem - Kel-la omi'
      },
      {
        pt: 'Estes dias - Kes-li dia',
        cv: 'Estes dias - Kes-li dia'
      },
      {
        pt: 'Aquelas flores - Kes-la flores',
        cv: 'Aquelas flores - Kes-la flores'
      },
      {
        pt: 'Este problema - Kel-li problema',
        cv: 'Este problema - Kel-li problema'
      },
      {
        pt: 'Aquela solução - Kel-la soluson',
        cv: 'Aquela solução - Kel-la soluson'
      },
      {
        pt: 'Estes exemplos - Kes-li ezemplu',
        cv: 'Estes exemplos - Kes-li ezemplu'
      },
      {
        pt: 'Aquelas lições - Kes-la lison',
        cv: 'Aquelas lições - Kes-la lison'
      },
      {
        pt: 'Este momento - Kel-li momentu',
        cv: 'Este momento - Kel-li momentu'
      },
      {
        pt: 'Aquele tempo - Kel-la tempu',
        cv: 'Aquele tempo - Kel-la tempu'
      },
      {
        pt: 'Estes objetos - Kes-li objetu',
        cv: 'Estes objetos - Kes-li objetu'
      },
      {
        pt: 'Aquelas coisas - Kes-la kosa',
        cv: 'Aquelas coisas - Kes-la kosa'
      }
    ]
  },
  {
    id: 9,
    title: {
      pt: 'Advérbios',
      cv: 'Advérbiu'
    },
    content: {
      pt: 'Os advérbios em cabo-verdiano são palavras que modificam verbos, adjetivos ou outros advérbios. Eles podem indicar tempo, modo, lugar, intensidade, etc. Alguns advérbios comuns são "gosi" (agora), "li" (aqui), "la" (lá), "oxi" (hoje), "manhan" (amanhã).',
      cv: 'Advérbiu na kriolu é palavras ki ta modifika verbus, adjetivu ou otus advérbiu. Es pode indika tempu, modu, lugar, intensidadi, etc. Alguns advérbiu komun é "gosi" (agora), "li" (aqui), "la" (lá), "oxi" (hoje), "manhan" (amanhã).'
    },
    examples: [
      {
        pt: 'Agora - Gosi / Gosi li',
        cv: 'Agora - Gosi / Gosi li'
      },
      {
        pt: 'Aqui - Li',
        cv: 'Aqui - Li'
      },
      {
        pt: 'Lá - La',
        cv: 'Lá - La'
      },
      {
        pt: 'Hoje - Oxi',
        cv: 'Hoje - Oxi'
      },
      {
        pt: 'Amanhã - Manhan',
        cv: 'Amanhã - Manhan'
      },
      {
        pt: 'Ontem - Onti',
        cv: 'Ontem - Onti'
      },
      {
        pt: 'Depois - Dipus',
        cv: 'Depois - Dipus'
      },
      {
        pt: 'Antes - Antis',
        cv: 'Antes - Antis'
      },
      {
        pt: 'Sempre - Sempri',
        cv: 'Sempre - Sempri'
      },
      {
        pt: 'Nunca - Nunka',
        cv: 'Nunca - Nunka'
      },
      {
        pt: 'Muito - Mutu',
        cv: 'Muito - Mutu'
      },
      {
        pt: 'Pouco - Poki',
        cv: 'Pouco - Poki'
      },
      {
        pt: 'Bem - Dretu',
        cv: 'Bem - Dretu'
      },
      {
        pt: 'Mal - Mal',
        cv: 'Mal - Mal'
      },
      {
        pt: 'Rapidamente - Lihéu',
        cv: 'Rapidamente - Lihéu'
      },
      {
        pt: 'Devagar - Devagar',
        cv: 'Devagar - Devagar'
      },
      {
        pt: 'Logo - Logo',
        cv: 'Logo - Logo'
      },
      {
        pt: 'Já - Dja',
        cv: 'Já - Dja'
      },
      {
        pt: 'Ainda - Ainda',
        cv: 'Ainda - Ainda'
      },
      {
        pt: 'Tão - Tantu',
        cv: 'Tão - Tantu'
      },
      {
        pt: 'Muito bem! - Mutu dretu!',
        cv: 'Muito bem! - Mutu dretu!'
      },
      {
        pt: 'Ainda não - Ainda ka',
        cv: 'Ainda não - Ainda ka'
      },
      {
        pt: 'Já cheguei - N dja txiga',
        cv: 'Já cheguei - N dja txiga'
      },
      {
        pt: 'Ela canta muito bem - El ta kanta mutu dretu',
        cv: 'Ela canta muito bem - El ta kanta mutu dretu'
      },
      {
        pt: 'Ele fala muito rápido - El ta papia mutu lihéu',
        cv: 'Ele fala muito rápido - El ta papia mutu lihéu'
      }
    ]
  },
  {
    id: 10,
    title: {
      pt: 'Preposições',
      cv: 'Prepozison'
    },
    content: {
      pt: 'As preposições em cabo-verdiano são palavras que estabelecem relações entre outras palavras na frase. Algumas preposições comuns são "na" (em), "pa" (para), "ku" (com), "di" (de), "ti" (até).',
      cv: 'Prepozison na kriolu é palavras ki ta stabelese relason entre otus palavras na frazi. Alguns prepozison komun é "na" (em), "pa" (para), "ku" (com), "di" (de), "ti" (até).'
    },
    examples: [
      {
        pt: 'Em casa - Na kaza',
        cv: 'Em casa - Na kaza'
      },
      {
        pt: 'Para a igreja - Pa igreja',
        cv: 'Para a igreja - Pa igreja'
      },
      {
        pt: 'Com amor - Ku amor',
        cv: 'Com amor - Ku amor'
      },
      {
        pt: 'De Deus - Di Deus',
        cv: 'De Deus - Di Deus'
      },
      {
        pt: 'Até amanhã - Ti manhan',
        cv: 'Até amanhã - Ti manhan'
      },
      {
        pt: 'Sobre a Bíblia - Sobri Bíblia',
        cv: 'Sobre a Bíblia - Sobri Bíblia'
      },
      {
        pt: 'Em cima da mesa - Na riba di meza',
        cv: 'Em cima da mesa - Na riba di meza'
      },
      {
        pt: 'Para o trabalho - Pa trabadju',
        cv: 'Para o trabalho - Pa trabadju'
      },
      {
        pt: 'Com os amigos - Ku amigus',
        cv: 'Com os amigos - Ku amigus'
      },
      {
        pt: 'De manhã - Di manhan',
        cv: 'De manhã - Di manhan'
      },
      {
        pt: 'Até logo - Ti logu',
        cv: 'Até logo - Ti logu'
      },
      {
        pt: 'Por favor - Pur favor',
        cv: 'Por favor - Pur favor'
      },
      {
        pt: 'Sem dinheiro - Sem dinheru',
        cv: 'Sem dinheiro - Sem dinheru'
      },
      {
        pt: 'Entre nós - Entre nos',
        cv: 'Entre nós - Entre nos'
      },
      {
        pt: 'Depois do almoço - Dipus di almusu',
        cv: 'Depois do almoço - Dipus di almusu'
      },
      {
        pt: 'Antes da aula - Antis di aula',
        cv: 'Antes da aula - Antis di aula'
      },
      {
        pt: 'Durante o dia - Durante dia',
        cv: 'Durante o dia - Durante dia'
      },
      {
        pt: 'Através da ponte - Traves di ponte',
        cv: 'Através da ponte - Traves di ponte'
      },
      {
        pt: 'Atrás da casa - Trás di kaza',
        cv: 'Atrás da casa - Trás di kaza'
      },
      {
        pt: 'Na frente da escola - Na frenti di skola',
        cv: 'Na frente da escola - Na frenti di skola'
      },
      {
        pt: 'Ao lado do mercado - La ladu di merkadu',
        cv: 'Ao lado do mercado - La ladu di merkadu'
      },
      {
        pt: 'Perto do mar - Pertu di mar',
        cv: 'Perto do mar - Pertu di mar'
      },
      {
        pt: 'Longe da cidade - Longi di sidade',
        cv: 'Longe da cidade - Longi di sidade'
      },
      {
        pt: 'Contra a parede - Kontra parede',
        cv: 'Contra a parede - Kontra parede'
      },
      {
        pt: 'Segundo a professora - Sigundo profesora',
        cv: 'Segundo a professora - Sigundo profesora'
      }
    ]
  }
];
