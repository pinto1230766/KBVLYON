export interface LessonPage {
  title: string;
  content: string;
}

export const grammarLessonContent: Record<number, LessonPage[]> = {
  1: [
    {
      title: 'Introdução ao Crioulo Cabo-verdiano',
      content: `
        <p>O crioulo cabo-verdiano (Kabuverdianu) é uma língua crioula de base portuguesa falada nas ilhas de Cabo Verde. É a língua materna da maioria dos cabo-verdianos e tem várias variantes regionais, sendo as principais: Sotavento (Santiago, Fogo, Brava, Maio) e Barlavento (São Vicente, Santo Antão, São Nicolau, Sal, Boa Vista).</p>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">Características principais:</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Não tem conjugação verbal tradicional</li>
          <li>Usa marcadores de tempo (ta, dja, ba, ata)</li>
          <li>Ordem das palavras: Sujeito-Verbo-Objeto</li>
          <li>Sem concordância de gênero ou número</li>
          <li>Vocabulário principalmente português com influências africanas</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">📝 Exemplos</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Santiago:</strong> N ka ta papia (Eu não falo)</li>
          <li><strong>São Vicente:</strong> M ka ta fala (Eu não falo)</li>
          <li>Diferenças regionais são significativas</li>
        </ul>
        
        <p class="text-sm text-muted-foreground mt-6">Fonte: Página</p>
      `,
    },
  ],
  2: [
    {
      title: 'Sistema de Pronomes Pessoais',
      content: `
        <p>O sistema pronominal do crioulo cabo-verdiano é mais simples que o português:</p>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">Pronomes Sujeito:</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>N / Mi (eu) - forma curta e longa</li>
          <li>Bu / Bo (tu/você)</li>
          <li>El / E (ele/ela) - sem distinção de gênero</li>
          <li>Nos / Nu (nós)</li>
          <li>Nhos / Nhôs (vocês/vós)</li>
          <li>Es / Ês (eles/elas)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">Pronomes Objeto:</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>M / Mi (me/mim)</li>
          <li>Bu / Bo (te/ti)</li>
          <li>L / El (o/a, lhe)</li>
          <li>Nos (nos)</li>
          <li>Nhos (vos)</li>
          <li>Es (os/as, lhes)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">Características:</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Não há distinção formal/informal (tu/você)</li>
          <li>Sem distinção de gênero na 3ª pessoa</li>
          <li>Formas curtas usadas antes de verbos</li>
          <li>Formas longas usadas em ênfase ou isoladamente</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">📝 Exemplos</h4>
      `,
    },
    {
      title: 'Sistema de Pronomes Pessoais',
      content: `
        <h4 class="text-lg font-semibold mb-3">📝 Exemplos</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>N ta bai (Eu vou) - forma curta</li>
          <li>Mi ta bai (EU vou) - forma longa, ênfase</li>
          <li>Bu odja-m? (Você me viu?)</li>
          <li>El da-l livru (Ele deu-lhe o livro)</li>
          <li>Nos ta papia ku nhos (Nós falamos com vocês)</li>
        </ul>
        
        <p class="text-sm text-muted-foreground mt-6">Fonte: Página</p>
      `,
    },
  ],
  3: [
    {
      title: 'Marcadores de Tempo, Modo e Aspecto (TMA)',
      content: `
        <p>O crioulo cabo-verdiano não conjuga verbos. Em vez disso, usa marcadores TMA antes do verbo:</p>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">1. TA - Presente habitual/progressivo</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Ações habituais: N ta trabadja (Eu trabalho)</li>
          <li>Ações em progresso: N ta trabadja (Estou trabalhando)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">2. DJA/JA - Perfectivo (ação completada)</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>N dja kume (Eu já comi)</li>
          <li>El dja bai (Ele já foi)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">3. BA - Passado</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>N ba bai (Eu fui)</li>
          <li>Es ba faze (Eles fizeram)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">4. ATA/TA BAI - Futuro</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>N ata faze (Eu vou fazer)</li>
          <li>Bu ta bai kume (Você vai comer)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">5. STABA/TAVA - Passado progressivo</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>N staba trabadja (Eu estava trabalhando)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">6. KA - Negação</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>N ka ta bai (Eu não vou)</li>
          <li>El ka kume (Ele não come)</li>
        </ul>
      `,
    },
    {
      title: 'Marcadores de Tempo, Modo e Aspecto (TMA)',
      content: `
        <h4 class="text-lg font-semibold mb-3">Combinações possíveis:</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Ka + ta: negação do habitual</li>
          <li>Ka + dja: negação do perfectivo</li>
          <li>Ta + ka: progressivo negativo</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">📝 Exemplos</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>N ta kume pan kada dia (Como pão todo dia)</li>
          <li>N dja kume (Já comi)</li>
          <li>N ba kume onti (Comi ontem)</li>
          <li>N ata kume manha (Vou comer amanhã)</li>
          <li>N staba kume kuandu bu txiga (Estava comendo quando você chegou)</li>
          <li>N ka ta kume karne (Não como carne)</li>
          <li>N ka dja kume (Ainda não comi)</li>
        </ul>
        
        <p class="text-sm text-muted-foreground mt-6">Fonte: Página</p>
      `,
    },
  ],
  4: [
    {
      title: 'Verbos Copulativos: É e STA',
      content: `
        <p>O crioulo tem dois verbos copulativos principais:</p>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">1. É - Ser (estados permanentes, identidade)</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Não varia com pessoa ou tempo</li>
          <li>Usado para: identidade, profissão, características permanentes, origem</li>
          <li>Exemplos:</li>
        </ul>
        <ul class="list-none pl-8 space-y-1 mt-2">
          <li>* N é kabuverdianu (Sou cabo-verdiano)</li>
          <li>* Bu é profesor (És professor)</li>
          <li>* El é altu (Ele é alto)</li>
          <li>* Kaza é grandi (A casa é grande)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">2. STA - Estar (estados temporários, localização)</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Também não varia</li>
          <li>Usado para: localização, estados temporários, progressivo</li>
          <li>Exemplos:</li>
        </ul>
        <ul class="list-none pl-8 space-y-1 mt-2">
          <li>* N sta na kaza (Estou em casa)</li>
          <li>* Bu sta doenti (Estás doente)</li>
          <li>* El sta trabadja (Ele está trabalhando)</li>
          <li>* Livru sta riba meza (O livro está sobre a mesa)</li>
        </ul>
      `,
    },
    {
      title: 'Verbos Copulativos: É e STA',
      content: `
        <h4 class="text-lg font-semibold mb-3">Diferenças importantes:</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>É: permanente, essencial</li>
          <li>STA: temporário, circunstancial</li>
          <li>STA + verbo: forma progressiva</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">Com negação:</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Ka + é: N ka é profesor (Não sou professor)</li>
          <li>Ka + sta: N ka sta li (Não estou aqui)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">📝 Exemplos</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>N é studanti, mas oji N ka sta na skola (Sou estudante, mas hoje não estou na escola)</li>
          <li>El é bedju, ma el sta bon (Ele é velho, mas está bem)</li>
          <li>Kaza é novu, ma sta suju (A casa é nova, mas está suja)</li>
          <li>N é di Praia, ma agora N sta na Mindelo (Sou da Praia, mas agora estou no Mindelo)</li>
        </ul>
        
        <p class="text-sm text-muted-foreground mt-6">Fonte: Página</p>
      `,
    },
  ],
  5: [
    {
      title: 'Ordem das Palavras e Estrutura da Frase',
      content: `
        <p>A ordem básica das palavras em crioulo é SVO (Sujeito-Verbo-Objeto), similar ao português:</p>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">1. Frases Declarativas:</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Sujeito + (TMA) + Verbo + Objeto</li>
          <li>N ta kume pan (Eu como pão)</li>
          <li>Maria dja konpra livru (Maria comprou livro)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">2. Frases Interrogativas:</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Mantém ordem SVO, muda apenas entonação</li>
          <li>Bu ta bai? (Você vai?)</li>
          <li>Com palavras interrogativas no início:</li>
        </ul>
        <ul class="list-none pl-8 space-y-1 mt-2">
          <li>* Ki bu ta faze? (O que você faz?)</li>
          <li>* Undi bu sta bai? (Onde você vai?)</li>
          <li>* Kuandu el ta txiga? (Quando ele chega?)</li>
          <li>* Ken é es? (Quem são eles?)</li>
          <li>* Pamodi bu ka bai? (Por que você não vai?)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">3. Frases Negativas:</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Ka antes do verbo/TMA</li>
          <li>N ka ta bai (Não vou)</li>
          <li>El ka kume (Ele não come)</li>
          <li>Pode ter 'n' no final para ênfase:</li>
        </ul>
        <ul class="list-none pl-8 space-y-1 mt-2">
          <li>* N ka bai n (Não vou mesmo)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">4. Posição dos Adjuntos:</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Tempo: geralmente no final</li>
        </ul>
        <ul class="list-none pl-8 space-y-1 mt-2">
          <li>* N ta bai skola kada dia (Vou à escola todo dia)</li>
        </ul>
        <ul class="list-disc pl-6 space-y-2 mt-2">
          <li>Lugar: após o verbo</li>
        </ul>
        <ul class="list-none pl-8 space-y-1 mt-2">
          <li>* N sta na kaza (Estou em casa)</li>
        </ul>
        <ul class="list-disc pl-6 space-y-2 mt-2">
          <li>Modo: após o verbo</li>
        </ul>
        <ul class="list-none pl-8 space-y-1 mt-2">
          <li>* El ta papia devagar (Ele fala devagar)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">5. Pronomes Objeto:</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Após o verbo, ligados por hífen</li>
          <li>N odja-bu (Eu te vi)</li>
          <li>El da-m livru (Ele me deu livro)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">📝 Exemplos</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>N ta kume pan na padaria kada manha (Como pão na padaria toda manhã)</li>
          <li>Ki bu ta faze li? (O que você faz aqui?)</li>
          <li>Maria ka ta bai merkadu oji n (Maria não vai ao mercado hoje)</li>
          <li>Undi nhos sta mora? (Onde vocês moram?)</li>
          <li>El da-m un livru bonitu (Ele me deu um livro bonito)</li>
        </ul>
        
        <p class="text-sm text-muted-foreground mt-6">Fonte: Página</p>
      `,
    },
  ],
  6: [
    {
      title: 'Possessivos e Demonstrativos',
      content: `
        <h4 class="text-lg font-semibold mb-3">Possessivos:</h4>
        <p>Em crioulo, os possessivos vêm DEPOIS do substantivo:</p>
        
        <ul class="list-disc pl-6 space-y-2 mt-4">
          <li>Kaza nha (minha casa)</li>
          <li>Livru bu (teu livro)</li>
          <li>Fidju se (filho dele/dela)</li>
          <li>Karu nos (nosso carro)</li>
          <li>Ami nhos (amigo de vocês)</li>
          <li>Kaza es (casa deles)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">Demonstrativos:</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Es/Kel (este/esse/aquele) - não varia</li>
          <li>Es kaza (esta casa)</li>
          <li>Es omi (este homem)</li>
          <li>Kel dia (aquele dia)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">Com 'li' (aqui) e 'la' (lá):</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Es kaza li (esta casa aqui)</li>
          <li>Kel omi la (aquele homem lá)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">📝 Exemplos</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Kaza nha é grandi (Minha casa é grande)</li>
          <li>Fidju bu sta na skola? (Teu filho está na escola?)</li>
          <li>Es livru li é di N (Este livro aqui é meu)</li>
        </ul>
        
        <p class="text-sm text-muted-foreground mt-6">Fonte: Página</p>
      `,
    },
  ],
  7: [
    {
      title: 'Formação do Plural',
      content: `
        <p>O crioulo geralmente NÃO marca plural no substantivo:</p>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">1. Plural indicado por contexto:</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Un mudjer (uma mulher) / Dus mudjer (duas mulheres)</li>
          <li>Un omi (um homem) / Muitu omi (muitos homens)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">2. Marcadores de plural:</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Números: un, dos, tres, muitu</li>
          <li>Quantificadores: algun (alguns), tudu (todos)</li>
          <li>Demonstrativos: es (estes/esses)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">3. Exceções (plural marcado):</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Alguns empréstimos do português mantêm -s</li>
          <li>Palavras terminadas em vogal podem adicionar -s</li>
          <li>Exemplo: omi → omis (raro)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">4. Concordância:</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Adjetivos NÃO concordam em número</li>
          <li>Mudjer bonitu (mulher bonita)</li>
          <li>Mudjer bonitu (mulheres bonitas)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-6 mb-3">📝 Exemplos</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Un kaza / Tres kaza (uma casa / três casas)</li>
          <li>Algun mudjer ta bai merkadu (Algumas mulheres vão ao mercado)</li>
          <li>Tudu omi sta trabadja (Todos os homens estão trabalhando)</li>
        </ul>
        
        <p class="text-sm text-muted-foreground mt-6">Fonte: Página</p>
      `,
    },
  ],
};

export default grammarLessonContent;
