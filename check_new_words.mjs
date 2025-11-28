import fs from 'fs';

// Lire le dictionnaire actuel
const content = fs.readFileSync('c:\\Users\\FP123\\Downloads\\KBVLYON\\src\\data\\dictionaryData.ts', 'utf8');
const jsonMatch = content.match(/export const dictionaryData: DictionaryEntry\[\] = (\[[\s\S]*\]);/);
const currentDictionary = JSON.parse(jsonMatch[1]);

// Créer un Set des mots existants pour une recherche rapide
const existingWords = new Set(currentDictionary.map(entry => entry.word.toLowerCase()));

console.log('📚 Dictionnaire actuel:', currentDictionary.length, 'mots\n');

// Listes CSV fournies par l'utilisateur (combinées)
const newWordsCSV = `mot_capverdien,traduction,categorie
a,e / o,Conjonction
a,a (preposição),Préposition
adas,adeus,Expression
adjaa,expressão de admiração,Expression
adormese,adormecer,Verbe
akulturason,aculturação,Nom
alimaria,animal / montaria,Nom
aligoriku,alegórico,Adjectif
aloa,lá (longe),Adverbe
almufada,almofada,Nom
almusu,almoço,Nom
aluz,luz,Nom
alvora,alvorada / nascer do sol,Verbe
amesa,ameaça,Nom
amostra,mostrar,Verbe
andador,andador / viajante,Nom
anbisozu,ambicioso,Adjectif
angra,angra / pequena baía,Nom
angustia,angústia,Nom
anil,anil,Nom
aniversariu,aniversário,Nom
ankua,viver bem / confortavelmente,Verbe
anpo,pequena mota,Nom
antan,então / e depois,Conjonction
anterior,anterior,Adjectif
anou,ano (variante),Nom
apagador,apagador,Nom
apara,aparar,Verbe
aparencia,aparência,Nom
aparenta,aparentar,Verbe
aparti,à parte,Adverbe
apela,apelar,Verbe
aperta,apertar,Verbe
apertu,aperto,Nom
apetiti,apetite,Nom
apilidu,apelido / sobrenome,Nom
aplaudi,aplaudir,Verbe
aplauzu,aplauso,Nom
apoiu,apoio,Nom
aponta,apontar,Verbe
aprende,aprender,Verbe
aprendiz,aprendiz,Nom
apresia,apreciar,Verbe
aprova,aprovar,Verbe
aproveita,aproveitar,Verbe
arada,arada / charrua,Nom
arame,arame,Nom
arberka,alparca / sandália,Nom
arbisa,alvíssaras / boas notícias,Nom
aredor,arredores / subúrbios,Nom
argudon,algodão,Nom
arka,arca / baú,Nom
arkitetu,arquiteto,Nom
arkitetura,arquitetura,Nom
arku,arco,Nom
armadu,armado,Adjectif
armazen,armazém,Nom
armazena,armazenar,Verbe
armun,irmão,Nom
arra,arre (interjeição),Expression
artigo,artigo,Nom
artizanatu,artesanato,Nom
asadu,assado,Adjectif
aseiu,asseio / higiene,Nom
asenblea,assembleia,Nom
asentu,assento / registro,Nom
asi,assim / portanto,Adverbe
ason,ação,Nom
asparagu,espargo,Nom
aspetu,aspeto,Nom
aspirina,aspirine,Nom
astru,astro / planeta,Nom
atadu,atado / amarrado,Adjectif
atinji,atingir,Verbe
atribui,atribuir,Verbe
atua,atuar,Verbe
atualidadi,atualidade,Nom
atura,aturar,Verbe
atxa,achar / encontrar,Verbe
aventura,aventurar / arriscar,Verbe
avontadi,à vontade / suficiente,Adjectif
avizu,aviso,Nom
axa,achar / alta febre,Nom
axada,achada / planície / campo grande,Nom
azarma,fantasma / criatura da noite,Nom
azeda,azedar,Verbe
babau,bobo / estúpido,Adjectif
baboza,babosa (planta),Nom
bada,ida / partida,Nom
badia,badia (habitante de Santiago),Nom
badjadera,dançarina,Nom
badjadoru,dançarino,Nom
bador,viajante / quem sai muito,Nom
baeta,combinação (roupa íntima),Nom
bafatia,esbofetear,Verbe
bafaton,bofetão,Nom
bagabaga,térmitas / formiga branca,Nom
bagaja,bagagem,Nom
bagarozu,vagaroso / lento,Adjectif
baion,garrafão,Nom
bakar,vacar / estar livre,Verbe
baketi,balde,Nom
bakon,bácoro / medroso,Nom
bala,ir embora depressa,Verbe
baladu,maduro (coco),Adjectif
balan-balan,falar muito / tagarelar,Verbe
balangia,balançar (devagar),Verbe
baleeru,baleeiro,Nom
baleti,valete (cartas),Nom
balkon,balcão,Nom
balon,balão,Nom
baloxa,pessoa gorda,Nom
balsuma,balsamar / crescer (plantas),Verbe
bana,abanar,Verbe
banatu,banato / idiota,Nom
banbu,carregar às costas (criança),Verbe
banbudu,carregado às costas,Adjectif
bandera,naturalizar,Verbe
bangu,rede de pesca,Nom
baradja,baralhar,Verbe
baradjadu,baralhado / confuso,Adjectif
barafusta,barafustar / lutar,Verbe
barateru,barateiro,Nom
barbari,ficar desesperado,Verbe
barbaria,barbearia,Nom
barbaru,bárbaro,Adjectif
barbia,barbear,Verbe
barbise,enlouquecer / tornar-se selvagem,Verbe
barbitxi,focinheira,Nom
bardadi,verdade,Nom
bardu,sebe / muro de pedras,Nom
bare,varrer,Verbe
baredor,varredor,Nom
baredu,varrido,Adjectif
baredura,varredura / lixo,Nom
bareja,varejar / cheirar mal,Verbe
barela,lavadouro,Nom
barenka,vara para bater,Nom
barenkada,pancada com vara,Nom
barera,barreira,Nom
bareti,boina / barrete,Nom
baria,variar / delirar,Verbe
bariadu,variado / delirante,Adjectif
bariason,variação,Nom
bariga,barriga,Nom
baril,barril,Nom
barilon,barril grande,Nom
barka,embarcar,Verbe
barkinhu,barquinho,Nom
barnelu,planta,Nom
baron,barão / vara grande,Nom
barsa,abraçar,Verbe
barsura,vassoura,Nom
barudja,fazer barulho / amotinar,Verbe
barudjentu,barulhento,Adjectif
barufa,borrifar,Verbe
batanka,espécie de tortilha,Nom
bate,bater,Verbe
batedu,batido,Adjectif
batismu,batismo,Nom
baxarel,bacharel,Nom
baxinha,baixinha,Nom
baxon,baixão (coro),Nom
bensu,bênção,Nom
bez,vez,Nom
bi?,o quê? / como?,Expression
bia,feixe / molho,Nom
biaja,viajar,Verbe
biaji,viagem,Nom
bibe,beber,Verbe
bibida,bebida,Nom
biblia,bíblia,Nom
biblioteka,biblioteca,Nom
bibu,vivo,Adjectif
bidju,vídeo,Nom
bidra,vidrar,Verbe
bidrasa,vidraça,Nom
bifi,bife,Nom
binagri,vinagre,Nom
binda,vinda,Nom
bingansa,vingança,Nom
biskoitu,biscoito,Nom
bistim,vintém,Nom
bitoke,filho da mãe (insulto),Nom
bitoku,bitoque (comida),Nom
bitola,bitola / bússola,Nom
bitua,habituar,Verbe
bitxa,bicha / fila,Nom
biuba,viúva,Nom
biubu,viúvo,Nom
bixa,bicha / fila,Nom
bixeru,bezerro,Nom
bixiga,bexiga,Nom
bizeru,bezerro,Nom
bluza,blusa,Nom
boa,voar,Verbe
bodja,boiar,Verbe
boita,voltar,Verbe
bokeja,bocejar / falar,Verbe
boxexa,bochecha,Nom
branda,abrandar / acalmar,Verbe
brandi,brandir / oscilar,Verbe
brandu,brando / suave,Adjectif
branka,branca,Adjectif
brava,brava / selvagem,Adjectif
brazil,Brasil,Nom
bria,brilhar / excitar,Verbe
brigonha,vergonha / timidez,Nom
brinda,brindar,Verbe
brinkedu,brinquedo,Nom
briu,brio / vaidade / desejo,Nom
brota,brotar,Verbe
brotxa,broxa / pincel grande / agarrar,Nom
brufu,chuvisco,Nom
brutu,bruto,Adjectif
bruxaria,bruxaria,Nom
bua,voar / saltar,Verbe
buda,buda,Nom
budju,búzio,Nom
bueru,bueiro / buraco,Nom
bufa,bufar / peidar,Verbe
bufalu,búfalo,Nom
bulu,bule,Nom
bunbu,carregar às costas (criança),Verbe
bunita,bonita,Adjectif
burbuja,borbulha / fervura,Nom
burgonha,vergonha,Nom
burkan,vulcão,Nom
burmedju,vermelho,Adjectif
burokrasia,burocracia,Nom
bubed,bêbado,Adjectif
bue,muito (calão),Adverbe
burguês,burguês,Nom
deposita,depositar,Verbe
depus,depois,Adverbe
derapa,derrapar,Verbe
derepenti,de repente,Adverbe
derete,derreter,Verbe
deru,dêem (verbo dar),Verbe
desabafa,desabafar,Verbe
desafia,desafiar,Verbe
desagrada,desagradar,Verbe
desanima,desanimar,Verbe
desaparese,desaparecer,Verbe
desarma,desarmar,Verbe
desente,decente,Adjectif
despensa,despensa,Nom
desperta,despertar,Verbe
despresu,desprezo,Nom
detali,detalhe,Nom
diabu,diabo,Nom
dialeto,dialeto,Nom
dibinidadi,divindade,Nom
dibino,divino,Adjectif
dibu,de ti / teu,Pronom
didi,de ti,Pronom
difikuldadi,dificuldade,Nom
dili,dele / de ele,Pronom
dista,distar,Verbe
dividu,dívida,Nom
dizer,dizer,Verbe
djanta,jantar,Verbe
djê,já é,Expression
djeu,ilhéu,Nom
djobe,olhar / procurar,Verbe
djuga,jogar / brincar,Verbe
djui,juiz,Nom
dobra,dobrar,Verbe
doidera,doidice,Nom
dodu,doido / maluco,Adjectif
dota,dotar,Verbe
dou,deu (verbo dar),Verbe
due,doer,Verbe
duelu,duelo,Nom
duka,educar,Verbe
dumingu,domingo,Nom
duque,duque,Nom
dur,duro,Adjectif
dus,dois,Nombre
duvilda,dúvida,Nom`;

// Parser le CSV
const lines = newWordsCSV.trim().split('\n').slice(1); // Skip header
const newWords = [];
const duplicates = [];

console.log('🔍 ANALYSE DES NOUVELLES LISTES\n');

lines.forEach(line => {
  const parts = line.split(',');
  if (parts.length >= 3) {
    const word = parts[0].trim();
    const translation = parts[1].trim();
    const category = parts[2].trim();
    
    if (word && translation && category) {
      if (existingWords.has(word.toLowerCase())) {
        duplicates.push({ word, translation, category });
      } else {
        newWords.push({ word, translation, category });
      }
    }
  }
});

console.log(`✅ Mots nouveaux trouvés: ${newWords.length}`);
console.log(`⚠️  Mots déjà présents: ${duplicates.length}\n`);

// Afficher les nouveaux mots par catégorie
const byCategory = {};
newWords.forEach(w => {
  if (!byCategory[w.category]) {
    byCategory[w.category] = [];
  }
  byCategory[w.category].push(w);
});

console.log('📊 NOUVEAUX MOTS PAR CATÉGORIE:\n');
Object.keys(byCategory).sort().forEach(cat => {
  console.log(`   ${cat}: ${byCategory[cat].length} mots`);
});

// Sauvegarder les nouveaux mots
fs.writeFileSync(
  'c:\\Users\\FP123\\Downloads\\KBVLYON\\new_words_to_add.json',
  JSON.stringify(newWords, null, 2)
);

// Sauvegarder les doublons pour vérification
fs.writeFileSync(
  'c:\\Users\\FP123\\Downloads\\KBVLYON\\duplicate_words_found.json',
  JSON.stringify(duplicates, null, 2)
);

console.log('\n📄 Fichiers créés:');
console.log('   - new_words_to_add.json (nouveaux mots)');
console.log('   - duplicate_words_found.json (doublons)');

// Afficher quelques exemples
console.log('\n📝 EXEMPLES DE NOUVEAUX MOTS:\n');
newWords.slice(0, 10).forEach(w => {
  console.log(`   ${w.word} → ${w.translation} (${w.category})`);
});

if (newWords.length > 10) {
  console.log(`   ... et ${newWords.length - 10} autres`);
}
