const completedModules = new Set();

const contentDiv = document.getElementById('content');
const progressDiv = document.getElementById('progress');

const contents = {
    1: `
  <iframe width="90%" height="315" src="https://www.youtube.com/embed/bBC-nXj3Ng4" 
    title="Introduction au Bitcoin" frameborder="0" allowfullscreen></iframe>
    <h2 style="color:orange;">Introduction au Bitcoin</h2>
    <p>Le bitcoin est une révolution technologique et monétaire, capable de nous faire remettre en question notre rapport à l'argent et à la société. En effet, le bitcoin (appelé BTC) est une monnaie neutre et décentralisée, c'est-à-dire qu'elle n'est contrôlée par aucune entité ou institution. C'est une innovation qui va au-delà d'une simple "monnaie internet" : c'est à la fois un protocole informatique (le bitcoin) et une unité monétaire (le bitcoin).
Le protocole utilise des technologies sous-jacentes telles que la cryptographie, la communication en réseau et la fameuse "blockchain", tandis que l'unité bitcoin sert de monnaie nécessaire au bon fonctionnement de ce protocole. Dans la vie de tous les jours, les Salvadoriens et les bitcoiners du monde entier utilisent la monnaie bitcoin pour acheter et vendre des biens et des services, comptant sur cette technologie pour améliorer leur vie.
    </p>
    <h2 style="color:orange;">La préhistoire du Bitcoin</h2>
    <p>Avant que le terme "bitcoin" ne devienne synonyme de monnaie numérique et de transformation financière, une série d'idées, d'innovations et de mouvements sociaux ont jeté les bases de sa création. Parmi ceux-ci, le mouvement cypherpunk se distingue comme un élément clé de la préhistoire du bitcoin.</br>
    Au cœur de l'évolution technologique des années 1980 et 1990, un groupe de personnes a commencé à s'interroger sur le rôle de la vie privée et de la liberté à l'ère numérique. Ces personnes, qui seront plus tard connues sous le nom de "cypherpunks", croyaient fermement que la cryptographie pouvait servir d'outil pour protéger les droits individuels contre l'ingérence des gouvernements et des grandes entreprises.</br>
Des figures emblématiques telles que Julian Assange, Wei Dai, Tim May et David Chaum ont joué un rôle essentiel dans l'élaboration de la philosophie et de la vision du mouvement. Ces penseurs ont partagé leurs idées sur une liste de diffusion influente, où des participants du monde entier se sont engagés dans des débats sur les meilleurs moyens de tirer parti de la technologie pour une plus grande liberté individuelle.</p>
     <h2 style="color:orange;">Cypherpunks : visionnaires du monde numérique</h2>
     <img src="https://planb.network/cdn/courses/btc101/assets/en/03.webp" alt="Bitcoin logo" class="image-full" />
<h2 style="color:orange;">Les trois documents fondamentaux des Cypherpunks</h2>
     <img src="https://planb.network/cdn/courses/btc101/assets/en/04.webp" alt="Bitcoin logo" class="image-full" />
     <p>Le mouvement cypherpunk, profondément enraciné dans l'activisme numérique et la cryptographie, s'est appuyé sur plusieurs textes fondateurs pour articuler ses principes et sa vision de l'avenir. Parmi ces écrits, trois se distinguent particulièrement :</br>
<h3 style="color:orange;">Le "Manifeste Cypherpunk" :</h3>
rédigé par Eric Hughes en 1993, le "Cypherpunk Manifesto" affirme que la vie privée est un droit fondamental. L'auteur affirme que la capacité de communiquer librement et confidentiellement est essentielle pour une société libre. Le manifeste stipule ce qui suit : "Nous ne pouvons pas attendre des gouvernements, des entreprises ou d'autres grandes organisations sans visage qu'ils nous accordent le droit à la vie privée [...]. Nous devons défendre notre propre vie privée si nous voulons en avoir une".</br>
<h3 style="color:orange;">Le "Manifeste crypto-anarchiste" :</h3>
rédigé par Timothy C. May en 1992, ce document explique comment l'utilisation de la cryptographie pourrait conduire à une ère d'anarchie cryptographique où les gouvernements seraient incapables d'interférer dans les affaires privées des citoyens. May envisage un avenir où les gens échangeraient anonymement des informations et de l'argent sans l'intervention d'un tiers.</br>
<h3 style="color:orange;">La "Déclaration d'indépendance du cyberespace" :</h3>
bien qu'il ne soit pas exclusivement cypherpunk, ce texte reflète les sentiments de nombreux participants au mouvement. Rédigé en 1996 par John Perry Barlow, il constitue une réponse à la réglementation croissante de l'internet par les gouvernements. La déclaration affirme que le cyberespace est un domaine distinct de la sphère physique et qu'il ne devrait pas être soumis aux mêmes lois. Comme elle l'indique, "nous n'avons pas de gouvernement élu, et nous ne sommes pas près d'en avoir un".
</p>

     <h2 style="color:orange;">Les prédécesseurs du bitcoin</h2>
<p>Avant l'émergence du bitcoin, il y a eu plusieurs tentatives de création d'une monnaie numérique. Par exemple, David Chaum a introduit le concept de "monnaie électronique anonyme" avec son projet "DigiCash" dans les années 1980. Malheureusement, en raison de diverses contraintes, DigiCash n'a jamais connu d'essor.</br>
Un autre précurseur important est la "monnaie B" de Wei Dai. Bien qu'il n'ait jamais été mis en œuvre, il présentait l'idée d'une monnaie numérique anonyme où la détection des fraudes était effectuée par une communauté d'évaluateurs plutôt que par une autorité centrale.</br>
C'est dans cet environnement fertile que le mystérieux Satoshi Nakamoto a publié le livre blanc du Bitcoin en 2008. Dans ce document, il combine plusieurs idées issues du mouvement cypherpunk, telles que la preuve de travail et les horodatages cryptographiques, pour créer une monnaie numérique décentralisée et résistante à la censure.</br>
Mais le bitcoin est plus que cela : il représente l'accomplissement des idéaux du cypherpunk. Au-delà de sa technologie, il symbolise une révolution contre les systèmes financiers traditionnels et offre une alternative basée sur la transparence, la décentralisation et la souveraineté individuelle.

</p>
<br/><br/>
    
  `,
    2: `
     <iframe width="100%" height="315" src="https://www.youtube.com/embed/Lx9zgZCMqXE" 
    title="Fonctionnement du Bitcoin" frameborder="0" allowfullscreen></iframe>
    <h2 style="color:orange;">Comment fonctionne le Bitcoin ?</h2>
    <p>Le Bitcoin repose sur la technologie blockchain. Chaque transaction est enregistrée publiquement et vérifiée par des mineurs. Les utilisateurs stockent leurs bitcoins dans des portefeuilles numériques.</br>
    <h2>Lancement du Bitcoin Commençons par un peu d'histoire.</h2>
        <img src="https://planb.network/cdn/courses/btc101/assets/en/39.webp" alt="Bitcoin logo" class="image-full" />
    Le 31 octobre 2008 marque la naissance de la nouvelle technologie financière qu'est le bitcoin. Ce jour-là, l'anonyme Satoshi Nakamoto a présenté son innovation au monde entier par l'intermédiaire d'un courriel envoyé à la liste de diffusion des cypherpunks, une communauté de passionnés de cryptographie qui se consacrent à la promotion de la vie privée sur l'internet. Ce courriel contenait un document appelé "Livre blanc", qui présentait le fonctionnement du bitcoin.</br>
    Cette initiative n'a pas immédiatement suscité l'enthousiasme, probablement en raison des échecs précédents des tentatives de création d'un système de monnaie numérique. Néanmoins, ce livre blanc est devenu une référence pour les utilisateurs de Bitcoin et a fait l'objet de nombreux débats dans l'écosystème Bitcoin au fil des ans.</br>
    Le 3 janvier 2009, Satoshi a officiellement inauguré le réseau Bitcoin en créant le premier bloc, également connu sous le nom de "bloc Genesis", qui a marqué le lancement de la blockchain Bitcoin. Ce bloc contient un message révélateur de la mission de Bitcoin : "03/jan/2009 Chancellor on brink of second bailout for banks"
            <img src="https://planb.network/cdn/courses/btc101/assets/en/41.webp" alt="Bitcoin logo" class="image-full" />
    "Nous pouvons remporter une bataille majeure dans la course aux armements et gagner une place de choix dans l'histoire de l'Europe
nouveau territoire de liberté depuis plusieurs années" - Satoshi Nakamoto
<img src="https://planb.network/cdn/courses/btc101/assets/en/42.webp" alt="Bitcoin logo" class="image-full" />
    <h2 style="color:orange;">Le protocole Bitcoin prend vie</h2>
    <img src="https://planb.network/cdn/courses/btc101/assets/en/43.webp" alt="Bitcoin logo" class="image-full" />
    L'intérêt pour le bitcoin s'est rapidement développé, amenant de nombreuses personnes à le tester, à participer à des débats, à résoudre des bogues et à réfléchir à ses aspects éthiques, économiques et philosophiques. Les gens étaient tellement captivés que Satoshi a créé le forum BitcoinTalk le 22 novembre 2009, afin de faciliter ce type de confrontation.</br>
    Le forum est rapidement devenu le lieu de discussion privilégié des utilisateurs de Bitcoin, à tel point que des mèmes et symboles célèbres associés à Bitcoin en sont nés, tels que le [logo Bitcoin] <a href="https://bitcointalk.org/index.php?topic=64.0">(https://bitcointalk.org/index.php?topic=64.0)</a>, le célèbre [Hodl] <a href="https://bitcointalk.org/index.php?topic=375643.0">(https://bitcointalk.org/index.php?topic=375643.0)</a>, ou encore le [Pizza day] <a href="https://bitcointalk.org/index.php?topic=137.msg1195">(https://bitcointalk.org/index.php?topic=137.msg1195)</a>.</br>
    **Le 22 mai 2010, Laszlo Hanyecz est entré dans l'histoire en proposant d'acheter deux pizzas pour 10 000 BTC : c'était la première fois que des bitcoins étaient utilisés pour acheter des biens matériels.</br>
    <h2 style="color:orange;">La disparition de Satoshi Nakamoto</h2>
    En 2010, alors que le bitcoin commence à attirer l'attention des médias, Satoshi décide de prendre ses distances en annonçant son départ dans un post de forum le 12 décembre 2010. Le 23 avril 2011, il effectue son dernier échange privé connu par email, puis disparaît, laissant sa création aux mains de la communauté.</br>
    "Les gouvernements sont doués pour couper les têtes d'une économie centralisée
les réseaux contrôlés comme Napster, mais les réseaux P2P purs comme Napster
Gnutella et Tor semblent tenir le coup" - Satoshi Nakamoto
Malgré l'absence de Satoshi, le développement de Bitcoin s'est poursuivi : l'histoire de Bitcoin s'écrit toutes les 10 minutes, et le protocole continue de fonctionner à ce jour comme prévu. Malgré les craintes, les incertitudes et les doutes, le bitcoin continue d'avancer, avec une très forte disponibilité en ligne. En fait, selon ce [site web] <a href="https://bitcoinuptime.com/">(https://bitcoinuptime.com/)</a>, Bitcoin a fonctionné sans problème majeur pendant 99,988 % du temps écoulé depuis sa création.</br>
Pour certains, Bitcoin est défini comme une entité fongique telle qu'un [mycélium] <a href="https://brandonquittem.com/bitcoin-is-the-mycelium-of-money/">(https://brandonquittem.com/bitcoin-is-the-mycelium-of-money/)</a>, tandis que d'autres le décrivent comme un [trou noir] <a href="https://dergigi.com/">(https://dergigi.com/)</a>. Qu'on l'aime ou qu'on le déteste, le bitcoin continue d'exister, avec son rythme constant de 10 minutes par bloc, comme le battement de cœur d'un nouveau système monétaire.</br>
Pour en savoir plus sur les écrits de Satoshi Nakamoto, nous vous recommandons de lire ["The Book of Satoshi"] <a href="https://planb.network/en/resources/books/98">(https://planb.network/en/resources/books/98)</a> de Phil Champagne ou le documentaire d'ARTE "Le mystère Satoshi".
    <img src="https://planb.network/cdn/courses/btc101/assets/en/45.webp" alt="Bitcoin logo" class="image-full" />
    "Le problème fondamental des monnaies conventionnelles est la confiance qu'il faut leur accorder pour qu'elles fonctionnent. Il faut faire confiance à la banque centrale pour qu'elle ne dévalorise pas la monnaie, mais l'histoire des monnaies fiduciaires est pleine d'abus de confiance. Il faut faire confiance aux banques pour détenir notre argent et le transférer électroniquement, mais elles le prêtent dans des vagues de bulles de crédit avec à peine une fraction en réserve" - [Satoshi Nakamoto] <a href="https://satoshi.nakamotoinstitute.org/posts/p2pfoundation/1/">(https://satoshi.nakamotoinstitute.org/posts/p2pfoundation/1/)</a>
Maintenant que nous disposons d'un peu de contexte, examinons le fonctionnement général d'une transaction en bitcoins.
    <h2>Transactions en Bitcoin</h2>
  Une transaction bitcoin est simplement un transfert de propriété de bitcoins par l'utilisation d'une adresse bitcoin. Pour décrire ce processus, présentons deux protagonistes : Alice et Bob. Alice souhaite acquérir des bitcoins, alors que Bob en possède déjà.
      <h2 style="color:orange;">Étape 1 - Création de la transaction via le portefeuille</h2>
      Pour que Bob puisse transférer des bitcoins à Alice, celle-ci doit lui fournir l'une de ses adresses Bitcoin, qui sont propres à son portefeuille Bitcoin. Tout comme la clé privée est utilisée pour générer la clé publique, cette dernière est ensuite utilisée pour générer des adresses.</br>
      Concrètement, lorsque Alice ouvre son portefeuille et appuie sur "recevoir", un code QR ou une adresse (comme celle-ci bc1q7957h3nj47efn8t2r6xdzs2cy3wjcyp8pch6hfkggy7jwrzj93sv4uykr) s'affiche. Il s'agit en quelque sorte de son "IBAN Bitcoin", qu'elle fournit ensuite à Bob.</br>
      Ensuite, Bob effectue la transaction en ouvrant son portefeuille Bitcoin et en appuyant sur "envoyer". Il copie et colle l'adresse d'Alice dans le champ requis, ajoute le montant qu'il souhaite envoyer et décide des frais de transaction, qui incitent les mineurs à inclure la transaction dans le bloc suivant. En effet, plus les frais payés par Bob sont élevés, plus il a de chances que la transaction soit incluse dans le prochain bloc ajouté à la blockchain, c'est-à-dire un registre public et immuable dans lequel sont enregistrées toutes les transactions en bitcoins.</br>
      Pour finaliser la transaction, Bob doit la signer avec sa clé privée afin de vérifier qu'il est bien le propriétaire des bitcoins qu'il souhaite transférer. Cette étape est généralement automatique sur les portefeuilles mobiles ou prend la forme d'une confirmation sur votre portefeuille physique : "Êtes-vous sûr de vouloir envoyer X à Y ? Oui ou non".
      **Les frais sont essentiels pour créer un marché libre pour l'inclusion de transactions dans les blocs. En fait, un bloc a une taille de 1 Mo (qui a été portée à 4 Mo après la mise à jour Segwit), de sorte que le nombre de transactions qui peuvent être "insérées" dans un bloc est limité à quelques milliers de transactions par bloc. La taille d'une transaction dépend de sa complexité. Par conséquent, les transactions les plus complexes entraînent généralement des frais plus élevés.
      <h2 style="color:orange;">Étape 2 : Propagation de la transaction à travers les nœuds</h2>
      À ce stade, la transaction a été créée et le portefeuille de Bob vLe système de preuve de travail nécessite de trouver un "hash" valide pour le bloc en question : pensez-y comme une empreinte digitale unique associée au bloc, composée de 256 caractères. La validité de ce hash dépend du taux de difficulté du réseau Bitcoin (nous entrerons dans les détails plus tard). Pour l'instant, considérons qu'un mineur a trouvé un bloc valide et que la transaction de Bob à Alice y est incluse. Le nouveau bloc valide est ensuite ajouté à la blockchain, le registre commun à tous les utilisateurs de Bitcoin.</br>
      a la partager avec le réseau Bitcoin. Pour ce faire, son portefeuille communiquera avec un nœud du réseau Bitcoin, qui propagera cette information aux autres nœuds. Ce type de processus permet à l'ensemble du réseau de voir cette nouvelle transaction et de la prendre en compte.</br>
          <img src="https://planb.network/cdn/courses/btc101/assets/en/47.webp" alt="Bitcoin logo" class="image-full" />
    À ce stade, même si cette transaction est connue de tous (via un outil appelé Mempool), elle ne peut pas être considérée comme confirmée tant qu'elle n'est pas insérée dans un bloc par un mineur, qui est le seul à valider les transactions en les incluant dans la blockchain.</br>
    En fait, les mineurs ont pour rôle de rassembler les transactions valides et non confirmées pour les compiler dans un bloc. En bref, ils doivent résoudre une énigme cryptographique dans le cadre d'un processus appelé "preuve de travail" pour que leur bloc soit le suivant dans la chaîne de blocs Bitcoin.
      <h2 style="color:orange;">Étape 3 : La transaction est extraite dans un bloc par un mineur.</h2>
      Le système de preuve de travail nécessite de trouver un "hash" valide pour le bloc en question : pensez-y comme une empreinte digitale unique associée au bloc, composée de 256 caractères. La validité de ce hash dépend du taux de difficulté du réseau Bitcoin (nous entrerons dans les détails plus tard). Pour l'instant, considérons qu'un mineur a trouvé un bloc valide et que la transaction de Bob à Alice y est incluse. Le nouveau bloc valide est ensuite ajouté à la blockchain, le registre commun à tous les utilisateurs de Bitcoin.
                <img src="https://planb.network/cdn/courses/btc101/assets/en/49.webp" alt="Bitcoin logo" class="image-full" />
    <h2 style="color:orange;">Étape 4 : Le bloc est valide et vérifié par le nœud référent d'Alice.</h2>
    À ce stade, la transaction est considérée comme valide : le mineur propage alors le nouveau bloc au réseau par l'intermédiaire de son nœud, et le portefeuille d'Alice est mis à jour.</br>
    <strong>Note:</strong>Même si Alice est informée qu'elle a reçu des bitcoins à l'une de ses adresses, il est conseillé de ne considérer la transaction comme immuable qu'après avoir reçu six confirmations. Cela signifie que six blocs supplémentaires doivent être minés en plus du bloc contenant la transaction de Bob. En d'autres termes, plus une transaction est ancienne dans la blockchain, plus elle devient immuable.
      <h2 style="color:orange;">Quelle est l'importance de ce processus ?</h2>
      Le système de transaction Bitcoin est décentralisé et fonctionne en peer-to-peer, sans intermédiaire de confiance.</br>
      Bob envoie sa transaction au réseau Bitcoin et lorsqu'un mineur publie un bloc valide contenant la transaction de Bob, Alice peut commencer à considérer que les bitcoins lui appartiennent. La confiance n'est requise à aucune étape du transfert de propriété des bitcoins : les règles du protocole et les incitations économiques à elles seules rendent prohibitif le coût d'un acte malveillant au sein du système Bitcoin.</br>
      En fait, les utilisateurs transfèrent la propriété de leurs fonds en signant numériquement les transactions avec leurs propres clés privées. D'autre part, les mineurs ont un pouvoir limité et les utilisateurs gardent un contrôle important en utilisant les nœuds Bitcoin pour valider les nouveaux blocs et les transactions incluses. Chaque nœud possède une copie complète ou partielle du grand livre, de sorte que le réseau formé par les nœuds Bitcoin rend le système véritablement décentralisé.</br>
      Par conséquent, pour que le réseau Bitcoin soit complètement détruit, il faudrait que chaque copie de la blockchain sur tous les nœuds Bitcoin soit éliminée, ce qui est une tâche pratiquement impossible en raison de la répartition géographique de ces nœuds et de la difficulté de les saisir physiquement.</br>
      Examinons de plus près le fonctionnement d'un nœud Bitcoin.
      <h2>Nœuds Bitcoin</h2>
      Les nœuds sont un élément fondamental de l'architecture du réseau Bitcoin, car ils remplissent diverses fonctions cruciales :
      <ul>
  <li>Maintien d'une copie de la chaîne de blocs Bitcoin</li>
  <li>Validation des transactions</li>
  <li>Transmission d'informations à d'autres nœuds</li>
  <li>Appliquer les règles du protocole Bitcoin.</li>
</ul>
Par conséquent, tout appareil exécutant un logiciel Bitcoin, appelé nœud Bitcoin (utilisant souvent [Bitcoin Core] <a href="https://bitcoin.org/en/bitcoin-core/">(https://bitcoin.org/en/bitcoin-core/)</a>, contribue à la décentralisation du réseau.
      <h2 style="color:orange;">Les nœuds sont le noyau central de Bitcoin.</h2>
      Chaque nœud détient une copie de la blockchain, qui permet de vérifier les transactions et de prévenir toute tentative de fraude. La nature décentralisée du réseau confère au bitcoin une résilience et une robustesse exceptionnelles. En effet, pour arrêter le protocole Bitcoin, il faudrait que tous les nœuds du monde soient éteints. Pour information, en septembre 2023, il y avait environ [45 000 nœuds] (https://bitnodes.io/nodes/all/) répartis dans le monde entier.</br>
      Les nœuds sont capables de vérifier la validité des blocs et des transactions parce qu'ils suivent les règles du consensus Bitcoin. Ces règles établissent la politique monétaire du bitcoin, comme le montant de la récompense des mineurs (que nous examinerons plus en détail dans la section suivante) et la quantité de bitcoins en circulation. D'une certaine manière, les nœuds agissent comme le système juridique du réseau, car tous les participants au réseau suivent les mêmes règles grâce à eux, ce qui garantit la neutralité du protocole Bitcoin. Les règles de consensus varient peu, voire pas du tout, car pour effectuer des changements, l'approbation de tous les nœuds est nécessaire.</br>
      La gouvernance au sein du protocole dépasse le cadre de ce cours de base, mais il est important de noter que chaque utilisateur gérant un nœud Bitcoin peut décider des règles à suivre. Un utilisateur peut choisir d'adhérer à des règles différentes (c'est-à-dire apporter des modifications au code), mais si ces modifications invalident les règles de consensus actuelles, ce nœud ne fera plus partie du réseau Bitcoin. Par conséquent, les modifications majeures sont rares et nécessitent une coordination importante entre des milliers de participants aux idéologies et aux intérêts divers, ce qui les oblige à fournir des mises à jour considérées comme "meilleures" par l'ensemble des utilisateurs de Bitcoin.</br>
      <h2 style="color:orange;">À quoi ressemble un nœud ?</h2>
      Plusieurs options s'offrent à vous lorsque vous souhaitez installer votre propre nœud, avec des coûts de maintenance différents. Vous pouvez simplement exécuter le logiciel Bitcoin Core sur votre ordinateur, mais cela nécessitera un espace de stockage important, car la blockchain pèse environ 500 Go. Pour surmonter cette contrainte, vous pouvez choisir de ne conserver que les N derniers blocs en mémoire en créant un "nœud élagué". Pour cette deuxième solution, le coût est négligeable car le nœud n'est actif que lorsque vous en avez besoin.
     <img src="https://planb.network/cdn/courses/btc101/assets/en/53.webp" alt="Bitcoin logo" class="image-full" />
     Une deuxième option consiste à utiliser un matériel dédié à cet effet, tel qu'un Raspberry Pi 4 équipé d'un disque SSD suffisamment grand (environ 2 To). Cette autre option est plus coûteuse si vous devez acheter le matériel, mais elle représente un peu moins de 10,00 € par an en termes de consommation d'électricité.</br>
     Du point de vue de la largeur de bande, si l'on considère un bloc de 1 Mo toutes les 10 minutes, cela correspond approximativement à 5 Go par mois.
      <h2 style="color:orange;">Les nœuds doivent rester accessibles à tous !</h2>
      Le coût abordable et l'accessibilité d'un nœud Bitcoin en termes de ressources matérielles, de stockage et de bande passante est une caractéristique très importante, car elle facilite la décentralisation du réseau.</br>
      En effet, tout le monde a une bonne raison de gérer un nœud ! Les coûts et les efforts sont minimes par rapport aux bénéfices obtenus. Il suffit de se lancer dans l'aventure et de rejoindre des milliers d'autres bitcoiners pour former ensemble le réseau Bitcoin.
     <img src="https://planb.network/cdn/courses/btc101/assets/en/54.webp" alt="Bitcoin logo" class="image-full" />
     Au contraire, si les blocs étaient 100 fois plus lourds, on pourrait certainement faire 100 fois plus de transactions toutes les 10 minutes, mais faire fonctionner un nœud Bitcoin nécessiterait un disque dur de 50TB, une bande passante de plus de 500GB/mois, et un matériel capable de valider des centaines de milliers de transactions en moins de 10 minutes. Dans cette situation hypothétique avec des blocs 100 fois plus grands, l'exploitation d'un nœud Bitcoin ne serait pas accessible au commun des mortels, ce qui compromettrait à la fois la décentralisation du protocole et l'immuabilité des transactions et des règles de consensus.</br>
     Ainsi, les contraintes du protocole ont été conçues pour permettre au plus grand nombre de faire fonctionner leurs propres nœuds Bitcoin. L'année 2017 a d'ailleurs été marquée par une intense controverse connue sous le nom de " guerre de la taille des blocs ". Ce conflit a opposé ceux qui souhaitaient modifier le bitcoin en augmentant la taille des blocs pour accroître la capacité de transaction (les mineurs, les plateformes d'échange et les institutions) à ceux qui cherchaient à préserver l'indépendance et le pouvoir des utilisateurs (les nœuds et les utilisateurs). C'est finalement le second qui a triomphé.</br>
     Suite à cette victoire, les nœuds ont activé une mise à jour appelée SegWit, ouvrant la voie à la mise en place du Lightning Network, un réseau de paiement instantané en bitcoins construit comme une seconde couche de la blockchain bitcoin. Cette situation démontre que les utilisateurs, par l'intermédiaire de leurs nœuds, détiennent un réel pouvoir au sein de Bitcoin, leur permettant de s'opposer aux grandes institutions en cas de désaccord.
      <h2>Mineurs</h2>
      Les mineurs sécurisent le réseau et ajoutent des transactions aux blocs. Ils utilisent de l'électricité grâce à des machines ASIC pour résoudre la preuve de travail du bitcoin
          <h2 style="color:orange;">Explication de la preuve de travail</h2>
          La "preuve de travail" (POW) est le mécanisme de consensus de sécurité du protocole Bitcoin. Il est à la base de tout et joue un rôle crucial dans la théorie des jeux de Bitcoin.</br>
      Pour expliquer son fonctionnement, imaginons une loterie universelle à laquelle tout le monde peut participer. L'objectif est de trouver un nombre spécifique qui permette au gagnant de signer un bloc valide et d'obtenir une récompense en bitcoins. Ce nombre est très simple à vérifier à l'aide de la fonction de hachage SHA-256, mais difficile à trouver : les participants (mineurs) essaieront des milliards et des milliards de possibilités, telles que 1, 52, 2648, 26874615, 15344854131318631, et ainsi de suite, jusqu'à ce qu'ils découvrent le bon.</br>
      Si le numéro choisi est correct : Jackpot ! Sinon, la recherche continue.</br>
      Pour optimiser le nombre de tentatives, ils utiliseront des machines spécifiques appelées ASIC, dont le seul rôle est de calculer des milliards de possibilités par seconde (la quantité totale de tentatives est appelée "HashRate"). Pour faire fonctionner ces machines, les grandes quantités d'électricité doivent être consommées. POW transforme donc l'énergie en monnaie, connectant le monde réel et le monde numérique pour créer la première monnaie basée sur l'énergie.</br>
      Les machines fonctionnent en continu et, après une moyenne de 10 minutes, un gagnant émerge : ce participant a réussi à trouver le hachage correct qui se situe en dessous du seuil de difficulté. Le grand et unique gagnant signe alors le nouveau bloc du serveur d'horodatage et l'ajout à la blockchain. Il reçoit ses récompenses et retourne tenter sa chance pour miner le bloc suivant. Ce processus est en cours depuis plus de dix ans, un gagnant confirmant les transactions Bitcoin toutes les 10 minutes tout en sécurisant les transactions passées, rendant ainsi la blockchain Bitcoin plus robuste et plus sûre.</br>
      Tous les blocs 2016 (environ toutes les deux semaines), l'ajustement de difficulté rééquilibre le jeu minier global en fonction du nombre de participants. Cet ajustement est nécessaire car le nombre de mineurs et leur puissance de calcul combinée peuvent varier considérablement au fil du temps. Pour maintenir le temps de bloc cible, le réseau recalibre le niveau de difficulté en fonction de la vitesse avec laquelle les derniers blocs de 2016 ont été extraits. S'ils ont été extraits trop rapidement, la difficulté augmente, ce qui rend plus difficile la recherche du hachage correct. Au contraire, s'ils ont été extraits trop lentement, la difficulté diminue, ce qui rend la tâche plus facile.</br>
    <img src="https://planb.network/cdn/courses/btc101/assets/en/24.webp" alt="Bitcoin logo" class="image-full" />
    <h2 style="color:orange;">L'exploitation minière est en constante évolution</h2>
      Au fil des ans, les mineurs se sont équipés de matériel informatique de plus en plus performant afin de produire autant de hachages que possible par seconde (HashRate) tout en consommant le moins d'énergie possible et de la manière la plus rentable possible. Les premiers mineurs, comme Satoshi ou Hal Finney, utilisaient uniquement leur processeur, puis d'autres ont commencé à utiliser leur carte graphique. Aujourd'hui, les mineurs utilisent des ASIC (Application-Specific Integrated Circuit) : des machines conçues uniquement pour appliquer l'algorithme SHA256.</br>
      Le Hashrate du réseau Bitcoin représente le nombre de tentatives effectuées par seconde pour trouver le prochain bloc. Aujourd'hui, il a même dépassé les 500 TH/s, soit 500 000 milliards de tentatives par seconde ! Plus le hashrate global est élevé, plus il est difficile pour un acteur malveillant de monopoliser les ressources nécessaires pour obtenir la majorité de la puissance minière et dépenser ses fonds plus d'une fois (problème de la double dépense). Il est donc économiquement plus viable de suivre les règles du protocole Bitcoin que d'agir contre elles.</br>
    <h2 style="color:orange;">Que trouve-t-on dans un bloc ?</h2>
    L'en-tête du bloc contient plusieurs éléments tels que l'heure, l'objectif de difficulté, le numéro du dernier bloc, la version utilisée et la racine de Merkle des transactions précédentes</br>
    La transaction coinbase est toujours la première à être incluse dans le bloc : elle contient la récompense du mineur pour avoir effectué le travail du validateur. Viennent ensuite les transactions validées. Les mineurs choisiront d'insérer les transactions qui leur rapportent le plus, à savoir les transactions de petite taille avec un maximum de frais.
     <h2 style="color:orange;">Indemnisation des mineurs</h2>
     Au départ, un mineur est rémunéré lorsqu'il trouve un bloc valide. Plus précisément, il est récompensé de deux manières :
     <ul>
  <li>par le biais de la subvention (bitcoins nouvellement frappés) incluse dans le bloc ;
</li>
  <li>par le biais de frais de transaction sur les transactions incluses dans le bloc.
</li>
  
</ul>
Le montant de la subvention est défini par les règles du consensus et dépend de l'époque : récompense de bloc = subvention de bloc + frais de transaction .</br>
En effet, pour les premiers blocs, la subvention de bloc était de 50 bitcoins. Tous les 210 000 blocs (environ tous les 4 ans), ce montant est divisé par deux. Aujourd'hui (en 2024), nous sommes dans la 5ème époque, ce qui signifie que la subvention est de 3,125 bitcoins. En résumé, il s'agit du mécanisme automatique qui libère de nouveaux bitcoins dans le système. La subvention diminue avec le temps, jusqu'à ce qu'elle atteigne la limite d'émission de 21 millions de bitcoins. Il y a déjà plus de 19,4 millions de bitcoins en circulation, soit plus de 92 %.</br>
La deuxième méthode de compensation est définie par le montant choisi par les utilisateurs pour les frais de transaction, qui montrent l'urgence pour l'utilisateur de voir sa transaction incluse dans le bloc suivant. Comme les mineurs veulent maximiser leurs revenus, ils auront tendance à donner la priorité aux transactions dont les frais de transaction sont élevés.</br>
Pour stabiliser leur modèle économique, qui repose sur les récompenses qu'ils reçoivent pour chaque bloc valide, les mineurs créent souvent des groupes par le biais de "pools miniers", où ils mettent en commun leurs ressources informatiques.
 <h2 style="color:orange;">Pourquoi se donner la peine de faire tout cela ?</h2>
 En résumé, l'innovation du Bitcoin est de proposer une solution au problème de la double dépense grâce à l'utilisation d'une blockchain basée sur la preuve de travail (Proof of Work) avec une difficulté flottante. Dans le monde numérique, la notion de propriété diffère de celle du monde physique. En effet, dans le monde numérique, tout peut être copié et collé, ce qui crée le risque d'utiliser plusieurs fois des actifs numériques de valeur. Des intermédiaires de confiance, tels que les banques, ont été créés pour résoudre ce problème technologique et s'assurer que lorsqu'un actif est transféré, il n'appartient plus à l'expéditeur.</br>
 Mais comment y parvenir sans intermédiaire de confiance ? Ce problème est bien décrit par le paradoxe des généraux byzantins, un problème de coordination de l'information dans un système où les différents acteurs ne sont pas dignes de confiance. Dans le problème des généraux byzantins, un groupe de généraux doit coordonner l'attaque d'une ville, mais certains d'entre eux peuvent être des traîtres qui tentent de perturber le plan. Le défi consiste pour les généraux loyaux à parvenir à un consensus sur l'attaque ou la retraite, malgré les messages trompeurs des traîtres.</br>
 Le bitcoin est donc une sorte de solution pour résoudre ce problème, ou du moins pour le contourner. Les "généraux" de Bitcoin, ou mineurs, produisent des blocs (d'informations) et les nœuds Bitcoin vérifient les transactions financières en utilisant des règles de consensus pour garantir l'authenticité des informations. L'asymétrie du coût énergétique entre la production et la vérification de l'information garantit la fiabilité de l'information, sans niveaux de confiance.</br>
 Les mineurs sont les bâtisseurs de la sécurité du réseau Bitcoin. En dépensant de l'énergie pour produire des hachages, ils construisent un mur qui rend extrêmement coûteux pour un agent malveillant de réécrire l'historique des transactions, et cette désincitation économique dissuade les autres de se comporter de manière malhonnête.</br>
 Même dans le cas d'une attaque à 51 %, où un agent possédait plus de la moitié du hashrate, le réseau resterait sûr car l'attaquant doit dépenser autant d'énergie que tous les mineurs réunis pour tenter de modifier la blockchain. C'est ce mécanisme de preuve de travail, gourmand en énergie, qui garantit la sécurité du réseau.

    </p>


<br/><br/>
   
  `,
    3: `
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/EFX92MkI52Y" 
    title="Comment obtenir du Bitcoin" frameborder="0" allowfullscreen></iframe>
    <h2 style="color:orange;" >Comment obtenir du Bitcoin ?</h2>
    <p>Vous pouvez acheter des bitcoins sur des plateformes comme <a href="https://www.binance.com/fr">Binance</a>, <a href="https://bitnob.com/">Bitnob</a>. Il est aussi possible de les recevoir comme paiement ou les gagner via certaines applications.</p>
    <h2 style="color:orange;" >Une économie parallèle se développe</h2>
    <p>
    Le bitcoin peut être considéré comme l'outil permettant de créer une économie parallèle aux monnaies fiduciaires, car il est possible de vendre des biens ou des services et d'être payé en bitcoins. Les transactions peuvent être effectuées directement en bitcoins, sans passer par une plateforme d'échange, mais simplement en allant d'un portefeuille bitcoin à un autre.</br>
    L'économie du Bitcoin existe et se développe dans certaines régions du monde, comme au Salvador, où le Bitcoin est devenu une monnaie légale en 2021. Malheureusement, en janvier 2025, l'assemblée a adopté une nouvelle loi qui a retiré au Bitcoin son titre de "monnaie légale", prétendument après avoir subi des pressions du Fonds monétaire international. Selon la nouvelle loi, les gens ne sont plus obligés d'accepter le Bitcoin dans leurs entreprises et ne peuvent plus payer leurs impôts avec. L'acceptation reste volontaire.</br>
    Néanmoins, au Salvador et dans d'autres parties du monde, de plus en plus d'individus, d'entreprises et d'organisations acceptent le Bitcoin comme moyen de paiement pour leurs produits ou services.</br>
    <img src="https://planb.network/cdn/courses/btc101/assets/en/72.webp" alt="Bitcoin logo" class="image-full" />
    Par ailleurs, un projet open-source et collaboratif a été lancé, [BTCMap] <a href="#">(https://btcmap.org/map#2/21.28937/5.46680)</a>, pour faciliter l'utilisation de Bitcoin dans les transactions quotidiennes. Cette plateforme recense tous les commerçants qui acceptent le bitcoin, ainsi que les différentes communautés bitcoin à travers le monde, vous pouvez donc visiter leur site pour découvrir l'écosystème bitcoin autour de vous. Ainsi, malgré les difficultés et les hésitations, il existe des initiatives comme BTCMap qui contribuent à rendre l'économie bitcoin plus accessible et plus pratique pour tous.
    </p>
    <h2 style="color:orange;" >Pourquoi devrions-nous accepter le bitcoin au lieu de l'acheter ?</h2>
    <p>
    Pour obtenir des bitcoins, vous pouvez les acheter sur des plateformes régulées par des organismes tels que l'AMF (Autorité des Marchés Financiers) en France, ou la SEC (Securities & Exchange Commission) aux Etats-Unis, mais cette solution implique la traçabilité de vos transactions. Une autre méthode pour obtenir des bitcoins est de les accepter comme moyen de paiement pour les produits ou services que vous proposez. Vous pouvez ainsi acquérir des bitcoins par votre travail sans vous préoccuper en permanence du cours du bitcoin.</br>
    En outre, l'acceptation de Bitcoin en tant que marchand présente plusieurs avantages, notamment la résistance à la censure, la réduction des frais de transaction, l'efficacité accrue, la protection contre l'inflation, ainsi que la liberté et la souveraineté financières.
    <img src="https://planb.network/cdn/courses/btc101/assets/en/73.webp" alt="Bitcoin logo" class="image-full" />
    <h2 style="color:orange;" >Comment procéder ?</h2>
    Pour accepter le bitcoin, il est nécessaire d'étudier les différentes solutions disponibles et de choisir celle qui convient le mieux à votre entreprise. Il n'existe pas de solution parfaite et plusieurs facteurs doivent être pris en compte pour faire votre choix, tels que le volume de transactions attendu, le budget alloué et le type d'entreprise (en ligne ou physique).
    </p>
    <h2 style="color:orange;" >Un avertissement avant de commencer !</h2>
    <p>
    Le bitcoin est devenu un actif financier majeur, principalement en raison de son offre limitée et de sa demande croissante. Cependant, l'achat de bitcoins comporte des risques qui nécessitent une attention particulière. Il est donc recommandé d'effectuer ses propres recherches et de se renseigner sur le sujet afin de se familiariser avec la technologie avant d'investir des fonds.</br>
   ✅N'investissez que ce que vous pouvez vous permettre de perdre.</br>
   ✅Le bitcoin est un actif financier très volatil, dont le cours peut tomber à 0.</br>
   ✅Les performances passées ne sont pas un indicateur fiable des performances futures.</br>
   ✅Contactez votre conseiller financier si nécessaire.</br>
   <strong>Le Réseau Plan ₿ ne fournit pas de conseils en matière d'investissement et rien de ce qui est dit ici ne doit être considéré comme tel</strong>
    <h2 style="color:orange;" >Mini liste de contrôle avant de franchir le pas</h2>
    Avant de vous lancer dans l'achat de bitcoins, assurez-vous d'avoir.. :</br>
✅Un portefeuille sécurisé.</br>
✅Une bonne compréhension de Bitcoin.</br>
✅Un plan d'épargne à suivre.</br>
✅Une vision à long terme.</br>
Si le sujet n'est toujours pas clair, sachez que le cours BTC102 vous guidera dans la sécurisation et l'acquisition de vos premiers bitcoins. Nous ne ferons ici qu'effleurer le sujet.</br>
Concrètement, il y a deux questions à se poser :</br>
✅Faut-il adopter une stratégie d'acquisition progressive ou d'un seul coup ?</br>
✅Faut-il utiliser une plateforme réglementée ou non réglementée ?
    <h2 style="color:orange;" >Stratégies d'acquisition</h2>
   ✅Coût moyen en dollars</br>
   Une stratégie graduelle implique des achats récurrents, c'est-à-dire l'achat de petites quantités de bitcoins à intervalles réguliers. Cette méthode permet de lisser le cours dans le temps et d'augmenter continuellement la quantité de bitcoins possédés. C'est une solution idéale pour l'épargne à long terme, qui permet d'éviter les inquiétudes liées à la volatilité du cours du bitcoin. Une fois le système mis en place, vous n'avez plus qu'à l'oublier pour voir votre investissement fructifier.
<img src="https://planb.network/cdn/courses/btc101/assets/en/74.webp" alt="Bitcoin logo" class="image-full" />
<strong>Attention aux UTXO :</strong> N'oubliez pas de consolider vos UTXO dans vos portefeuilles de temps en temps. Cette pratique est essentielle pour gérer efficacement vos bitcoins et éviter les frais inutiles lors des transactions.</br>
Un UTXO (Unspent Transaction Output) est une sortie d'une transaction qui n'a pas encore été dépensée, ce qui signifie qu'elle n'a pas été utilisée comme entrée pour une nouvelle transaction. La consolidation des UTXO consiste à combiner plusieurs petits UTXO en un plus grand, afin de réduire le "poids" de la transaction et ainsi de payer des frais moins élevés.</br>
✅Achat spontané</br>
L'achat spontané, qui permet de se familiariser immédiatement avec le bitcoin, peut être une solution "tout-en-un". Qu'il s'agisse d'acheter pendant un krach ou de profiter d'un bonus, la décision vous appartient. Il vous faudra prendre votre courage à deux mains et appuyer sur le bouton d'achat.</br>
Dans ce cas, vous devez être prudent et contrôler vos émotions, car le prix du bitcoin peut être très volatile. En fait, le FOMO (Fear of Missing Out) et le FUD (Fear, Uncertainty, Doubt) sont vos pires ennemis ! N'oubliez pas de rester calme et de suivre la stratégie que vous avez établie à l'avance, afin d'éviter toute prise de décision impulsive et potentiellement dangereuse.
    <h2 style="color:orange;" >À qui devons-nous acheter nos bitcoins ?</h2>
Il existe plusieurs façons d'acquérir des bitcoins, chacune étant soumise à sa propre réglementation, qui peut varier d'une juridiction à l'autre. Certaines plateformes exigent une identification pour vérification (KYC), d'autres non. Il est donc essentiel de comprendre les réglementations associées à chaque plateforme.</br>
✅Plates-formes DCA</br>
Comme nous l'avons présenté ci-dessus, une méthode courante pour accumuler des bitcoins est le Dollar Cost Averaging (DCA), qui consiste à acheter régulièrement de petites quantités. Plusieurs plateformes proposent ce service, comme celles listées sur notre page dédiée. Outre la simplicité de la mise en place d'un DCA, les retraits vers votre portefeuille sont généralement automatiques, ce qui signifie que vous gardez toujours le contrôle de vos actifs.</br>
Aujourd'hui, presque toutes les solutions de DCA sont relativement efficaces et ont des frais presque similaires, de sorte que le choix dépendra davantage de la disponibilité dans votre pays.</br>
✅Plateformes de courtage</br>
Pour les investissements à grande échelle, les plateformes réglementées et reconnues telles que Kraken, Bitstamp et Paymium sont recommandées. Elles offrent un environnement sûr et sécurisé pour les transactions à haut volume.</br>
Leur utilisation est simple et accessible à tous :</br>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<ol style="list-style-type: none; counter-reset: step-counter; padding-left: 0;">
  <li style="counter-increment: step-counter; margin-bottom: 15px; position: relative; padding-left: 40px;">
    <span style="position: absolute; left: 0; background: #f7931a; color: white; width: 25px; height: 25px; border-radius: 50%; text-align: center; line-height: 25px;">
      <span style="font-size: 14px;">1</span>
    </span>
    <strong>Ouvrir un compte KYC</strong>
  </li>
  <li style="counter-increment: step-counter; margin-bottom: 15px; position: relative; padding-left: 40px;">
    <span style="position: absolute; left: 0; background: #f7931a; color: white; width: 25px; height: 25px; border-radius: 50%; text-align: center; line-height: 25px;">
      <span style="font-size: 14px;">2</span>
    </span>
    <strong>Virement de fonds sur votre compte</strong>
  </li>
  <li style="counter-increment: step-counter; margin-bottom: 15px; position: relative; padding-left: 40px;">
    <span style="position: absolute; left: 0; background: #f7931a; color: white; width: 25px; height: 25px; border-radius: 50%; text-align: center; line-height: 25px;">
      <span style="font-size: 14px;">3</span>
    </span>
    <strong>Acheter des bitcoins</strong>
  </li>
  <li style="counter-increment: step-counter; margin-bottom: 15px; position: relative; padding-left: 40px;">
    <span style="position: absolute; left: 0; background: #f7931a; color: white; width: 25px; height: 25px; border-radius: 50%; text-align: center; line-height: 25px;">
      <span style="font-size: 14px;">4</span>
    </span>
    <strong>Retirer des bitcoins vers votre portefeuille</strong>
  </li>
</ol>
Après l'achat, il est conseillé de retirer immédiatement les bitcoins des plateformes d'échange afin de minimiser les risques de piratage et de blocage des fonds. Attention, les frais de retrait peuvent être élevés, parfois jusqu'à 25 euros selon les plateformes.</br>
La réglementation relative à la connaissance du client (KYC) exige des utilisateurs qu'ils s'identifient afin de lutter contre le financement du terrorisme, l'évasion fiscale et le blanchiment d'argent</br>
Il est essentiel de reconnaître que le KYC est un sujet de discussion important dans l'industrie du Bitcoin. Alors que de nombreuses personnes débattent de son efficacité, il y a de nombreuses préoccupations qui y sont associées. Dans de nombreux programmes de formation et contenus de notre académie, nous conseillons aux utilisateurs avancés d'éviter les plateformes qui exigent un KYC, car il existe souvent des alternatives plus respectueuses de la vie privée.
 <h2 style="color:orange;" >Solutions non-KYC</h2>
 En outre, il existe plusieurs places de marché où l'on peut acheter et vendre des bitcoins dans le cadre d'un échange de pair à pair. D'une manière générale, vous pouvez prendre en compte les éléments suivants :</br>
 <ul>
  <li>DAB Bitcoin</li>
  <li>Rencontres physiques avec d'autres passionnés de bitcoins</li>
  <li>Plateformes illégales et non réglementées</li>
  <li>Solutions de mise en relation peer-to-peer</li>
  <li>Les néobanques opérant dans des pays favorables au bitcoin</li>
</ul>
Enfin, il est important de noter que les obligations fiscales peuvent varier en fonction de la juridiction. Nous vous encourageons donc vivement à consulter les réglementations en vigueur dans votre pays avant d'entreprendre toute action susceptible de vous exposer à un risque.


   </p>

    <br/><br/>
   
  `,
    4: `
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/DEsHfWCccuY" 
    title="Sécurité Bitcoin" frameborder="0" allowfullscreen></iframe>
    <h2>Sécurité et bonnes pratiques</h2>
    <strong>Découvrons ensemble quelques autres bonnes pratiques qui peuvent vous permettre d'optimiser votre confidentialité sur Bitcoin.</strong>
    <h2 style="color:orange;">Sécurité :Le nœud complet</h2>
    Posséder ses bitcoins en self-custody, c'est bien, mais utiliser son propre nœud complet, c'est mieux ! Voici pourquoi disposer de son propre nœud est crucial pour une utilisation pleinement souveraine de Bitcoin :
    

<ul style="line-height: 1.8;"  >
  <li>
    <strong>Résistance à la censure</strong> : Vos transactions ne peuvent être bloquées par quiconque
  </li>
  <li>
    <strong>Indépendance vis-à-vis des tiers</strong> : Vous ne dépendez plus d'aucun service externe pour vérifier les données de la blockchain
  </li>
  <li>
    <strong>Participation active</strong> : Vous avez la capacité de définir vos propres règles de validation et de prendre part directement au consensus
  </li>
  <li>
    <strong>Contribution au réseau</strong> : En faisant tourner un nœud, vous aidez à renforcer et à distribuer le réseau Bitcoin
  </li>
  <li>
    <strong>Éducation technique</strong> : Gérer un nœud complet est un excellent moyen d'approfondir vos connaissances techniques sur Bitcoin
  </li>
</ul>
En plus de ces bénéfices, l'utilisation d'un nœud complet améliore aussi votre confidentialité lors de la diffusion de vos transactions. Lorsque vous émettez une transaction, celle-ci est d'abord créée et signée via votre portefeuille. Pour la diffuser sur le réseau Bitcoin, elle doit être connue par au moins un nœud. En utilisant votre propre nœud, vous contrôlez directement cette diffusion, ce qui renforce ainsi votre confidentialité et limitant les risques de fuite de données.</br>
Si vous ne disposez pas de votre propre nœud Bitcoin, vous serez contraint d'utiliser celui d'un tiers, comme par exemple celui proposé par le fournisseur de votre logiciel de portefeuille. En plus de la diffusion des transactions, votre portefeuille nécessite l'accès à diverses informations telles que les transactions en attente, les soldes associés à vos adresses ou encore le nombre de confirmations pour vos transactions. Pour accéder à toutes ces données, vous devez interroger un nœud.
 <img src="https://planb.network/cdn/courses/btc204/assets/fr/100.webp" alt="Bitcoin logo" class="image-full" />
 Le principal risque lorsque vous n'utilisez pas votre propre nœud Bitcoin est que l'opérateur du nœud tiers puisse observer vos activités sur la blockchain, voire partager ces informations avec d'autres entités. Pour limiter ce risque, une solution intermédiaire consiste à utiliser un logiciel de portefeuille permettant de masquer vos connexions via Tor. Cela peut réduire l'exposition de vos données. Toutefois, la solution optimale reste d'avoir votre propre nœud Bitcoin et de l'utiliser pour la diffusion de vos transactions. Évidemment, il faudra également veiller à ne pas faire fuiter d'informations au niveau de votre nœud, mais c'est un autre sujet que nous étudierons dans les parties suivantes.</br>
 Au-delà de l'avantage évident pour votre confidentialité, avoir votre propre nœud complet vous assure également de la véracité des données sur la blockchain, vous protège contre la censure et vous permet de participer activement à la gouvernance de Bitcoin. En utilisant votre propre nœud, vous contribuez avec votre poids économique à la chaîne de votre choix, ce qui est important lors de conflits au sein de la communauté, comme lors de la Blocksize War de 2015 à 2017 par exemple. En cas de fork, utiliser le nœud d'un tiers pourrait vous mener à soutenir une chaîne que vous ne voulez pas favoriser, car l'opérateur du nœud fait le choix à votre place.</br>
 Vous l'aurez compris, dans un souci de confidentialité et plus largement de souveraineté individuelle, il est indispensable de faire tourner et d'utiliser votre propre nœud complet !
<h2 style="color:orange;">Tromper les heuristiques d'analyse</h2>
Plus largement, il est important de comprendre les heuristiques dont nous avons parlé dans la partie précédente, afin de mieux les éviter ou les tromper. Adopter une série de bonnes pratiques peut s'avérer bénéfique, même si elles ne sont pas indispensables. Elles offrent une couche supplémentaire de protection qui peut s'avérer importante pour maintenir une bonne confidentialité lors de votre utilisation de Bitcoin.</br>
Le premier conseil que je pourrais donner est de vous fondre dans la foule la plus dense. Sur Bitcoin, cela implique d'utiliser les modèles de scripts les plus adoptés. Par exemple, les scripts P2WSH, souvent utilisés pour les configurations multisig SegWit V0, sont très peu fréquents. Ils ne vous permettent pas de vous cacher dans un grand ensemble d'anonymat. C'est pareil pour les vieux modèles comme P2PKH ou P2SH. Bien qu'ils soient largement présents dans l'UTXO set, ils sont de moins en moins utilisés pour les nouvelles transactions.</br>
De manière générale, il est plus prudent de se tourner vers le standard de script le plus récent, à condition qu'il soit suffisamment adopté. Ainsi, si en 2022, je vous aurais déconseillé d'utiliser du P2TR (Taproot) du fait de sa faible adoption, en 2024, je vous recommanderais plutôt d'opter pour ce type de script, ou à défaut, pour du script SegWit V0, car le nombre de transactions utilisant P2TR commence à représenter une part très importante.</br>
Un autre conseil pour préserver votre confidentialité est d'essayer de contourner les heuristiques internes aux transactions. Par exemple, lors d'un paiement, vous pouvez essayer d'éviter de créer un output avec un montant rond, car cela pourrait signaler que l'autre output représente le change. Si vous devez envoyer 100 k sats à un ami, envisagez de lui transférer un montant légèrement supérieur pour échapper à cette heuristique. De même, essayez de ne pas créer des outputs de change disproportionnément élevés par rapport au paiement effectué, ce qui pourrait aussi révéler lequel des outputs représente le change.
 <img src="https://planb.network/cdn/courses/btc204/assets/fr/102.webp" alt="Bitcoin logo" class="image-full" />
 Enfin, si vous effectuez des transactions Bitcoin de manière régulière, veillez à ne pas les diffuser toujours aux mêmes heures. En répartissant la diffusion de vos transactions tout au long de la journée et de la semaine, vous évitez de donner aux observateurs externes la possibilité de déceler un modèle temporel basé sur les fuseaux horaires qui pourrait renforcer leur analyse.</br>
 Au-delà de toutes ces bonnes pratiques à adopter au quotidien, il existe des méthodes encore plus efficaces pour briser complètement la traçabilité de vos bitcoins. Parmi elles, il y a évidemment les transactions coinjoin que nous allons étudier en profondeur dans la partie suivante.

<h2 style="color:orange;">📍 Partie 1 – Comprendre la sécurité de Bitcoin</h2>
    <ul>
  <li>Bitcoin est un protocole décentralisé basé sur la cryptographie.</li>
  <li>Chaque transaction est signée numériquement.</li>
  <li>Le réseau est sécurisé par la puissance de calcul des mineurs (preuve de travail).</li>
</ul>

<h2 style="color:orange;">🔐 Partie 2 – Sécuriser son portefeuille</h2>
    <ul>
  <li>Types de portefeuilles : logiciel (app), matériel (Ledger, Trezor), papier.</li>
  <li>Ne jamais partager sa clé privée ou sa phrase secrète (seed).</li>
  <li>Toujours activer l’authentification à 2 facteurs (2FA).</li>
</ul>

<h2 style="color:orange;">🧠 Partie 3 – Bonnes pratiques pour débutant</h2>
    <ul>
  <li>Toujours tester avec un petit montant d’abord.</li>
  <li>Ne jamais investir plus que ce qu’on est prêt à perdre.</li>
  <li>Vérifier l’adresse avant chaque transaction.</li>
  <li>Ne pas laisser ses BTC sur une plateforme trop longtemps (les récupérer sur son propre wallet).</li>
</ul>

<h2 style="color:orange;">🧑‍💻 Partie 4 – Éviter les arnaques</h2>
    <ul>
  <li>Se méfier des promesses de gains rapides.</li>
  <li>Ne jamais partager ses infos via des liens inconnus (phishing).</li>
  <li>Ne jamais croire aux faux giveaways (ex : Elon Musk vous "offre" des BTC).</li>
  <li>Utiliser uniquement les plateformes connues : Binance, Bitnob, Kraken…</li>
</ul>
    <p>Ne partagez jamais votre clé privée. Utilisez un portefeuille sécurisé (cold wallet), activez l'authentification à deux facteurs et méfiez-vous des arnaques.</p>
    <br/><br/>
  `
};

function loadContent(num) {
    completedModules.add(num);
    updateProgressBar();

    contentDiv.innerHTML = `
    <div id="progress" class="progress-bar">Modules complétés : ${completedModules.size}/4</div>
    ${contents[num]}
  `;
}

function updateProgressBar() {
    const progressText = `Modules complétés : ${completedModules.size}/4`;
    const progressEl = document.getElementById("progress");
    if (progressEl) {
        progressEl.textContent = progressText;
    }
}
