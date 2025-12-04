// Content database - ALLE tekster udvidet for fylde
const content = {
    circles: {
        tre: {
            klient: {
                title: "TRE - Tension & Trauma Releasing Exercises",
                text: "TRE er en simpel metode hvor du gennem 7 øvelser aktiverer kroppens naturlige rystemekanisme. Når du tremorer (ryster), hjælper det din krop med at slippe spændinger og komme i balance. Det er som når dyr ryster efter en farlig situation - det hjælper nervesystemet med at vende tilbage til ro. Tremor er en naturlig, biologisk proces som kroppen bruger til at regulere sig selv. Du behøver ikke at forstå hvorfor det virker - kroppen ved det allerede."
            },
            fagfolk: {
                title: "TRE - Klinisk Perspektiv",
                text: "TRE aktiverer neurogene tremor gennem systematisk muskeltrætning, primært i psoas og ben-muskulatur. Metoden faciliterer autonomt nervesystem-regulering uden at kræve narrativ processing af trauma. Effektiv som standalone eller integreret i eksisterende terapeutisk praksis. Særligt velegnet til klienter der har svært ved verbal terapi, eller hvor somatisk arbejde kan komplementere talk-therapy. Metoden kræver minimal instruktion og kan læres på få timer, hvorefter klienten kan praktisere selv hjemme."
            },
            videnskab: {
                title: "TRE - Neurobiologisk Mekanisme",
                text: "TRE inducerer neurogen tremor via muskel-spindle aktivering og proprioceptiv feedback. Tremor faciliterer polyvagal regulering, completion af incomplete defensive responses, og reorganisering af sensomotoriske mønstre associeret med traumatisk stress. Dokumenteret effekt på HPA-akse og autonomt nervesystem. Mekanismen involverer bottom-up regulering gennem brainstem circuits, hvilket gør metoden tilgængelig også ved præfrontal dysregulering. Tremor aktiverer sensomotoriske loops der kan reorganisere maladaptive patterns uden at kræve kognitiv medvirken."
            },
            sclerose: {
                title: "TRE for Mennesker med Sclerose",
                text: "TRE kan hjælpe med at reducere muskelspasticitet og kronisk spænding der ofte følger med sclerose. Tremor arbejder mildt med nervesystemet uden at udmatte kroppen, hvilket er vigtigt når energiniveauet er lavt. Mange med sclerose oplever forbedret søvn, mindre smerte og bedre energiniveau efter regelmæssig TRE-praksis. Metoden er skånsom og kan tilpasses din aktuelle tilstand - nogle dage tremorer kroppen meget, andre dage mindre. Du bestemmer tempoet, og kroppen regulerer intensiteten selv. TRE kan praktiseres liggende, hvilket gør det tilgængeligt også ved reduceret mobilitet."
            }
        },
        polyvagal: {
            klient: {
                title: "Polyvagal Teori - Dit Nervesystem",
                text: "Din krop har tre forskellige 'gear': Ro og fordøjelse (grøn), alarm og kamp/flugt (gul), og nedlukning (rød). Når du tremorer, hjælper det din krop med at skifte fra alarm eller nedlukning tilbage til det grønne gear, hvor du kan føle dig sikker og forbundet. I det grønne gear fungerer fordøjelsen, søvnen og immunforsvaret bedst. Her kan du være social, kreativ og til stede. Tremor er en af de måder kroppen naturligt finder tilbage til dette gear på - uden at du skal 'tænke' dig derhen."
            },
            fagfolk: {
                title: "Polyvagal Teori - Autonomt Nervesystem",
                text: "Stephen Porges' teori beskriver tre fylogenetiske lag: ventral vagal (social engagement), sympatisk (mobilisering), dorsal vagal (immobilisering). TRE faciliterer bevægelse fra sympatisk hyperarousal eller dorsal shutdown tilbage til ventral vagal regulering gennem neuroceptive signaler om sikkerhed. Tremor fungerer som en bottom-up intervention der modulerer vagal tone uden at kræve top-down kognitiv processing. Særligt relevant for klienter med kompleks trauma hvor neuroception er fejljusteret - tremor sender afferente signaler der informerer brainstem om sikkerhed."
            },
            videnskab: {
                title: "Polyvagal Teori - Neurofysiologi",
                text: "Vagalt modulerede kardiale og respiratoriske mønstre reflekterer autonomt nervesystem-tilstand. Tremor aktiverer afferent vagal signalering, hvilket nedregulerer amygdala-respons og faciliterer præfrontal korteks engagement. Respiratory sinus arrhythmia (RSA) forbedres, indikerende for øget vagal tone. Myeliniserede vagale fibre fra nucleus ambiguus regulerer hjerte, lunger og ansigtsmuskulatur - tremor påvirker dette system gennem proprioceptive og interoceptive pathways. Shift fra sympatisk dominans til ventral vagal regulering medieres gennem polyvagal hierarchi."
            },
            sclerose: {
                title: "Nervesystem-Regulering ved Sclerose",
                text: "Sclerose påvirker nervesystemet dybt - både gennem sygdommens fysiske effekt på nerveceller og gennem den kroniske stress ved at leve med sygdommen. Mange med sclerose sidder fast i alarm-tilstand (sympatisk) eller nedluknings-tilstand (dorsal vagal), hvilket forværrer inflammation og symptomer. TRE hjælper nervesystemet med at finde ro-tilstanden (ventral vagal), hvilket kan reducere inflammation, forbedre immunfunktion og give bedre symptomkontrol. Når nervesystemet er i ro-tilstand, fungerer kroppens selvhelingsmekanismer bedre, og symptomer som spasticitet, smerte og træthed kan mildnes. Regelmæssig tremor-praksis træner nervesystemet i at finde denne ro-tilstand lettere og oftere."
            }
        },
        narrative: {
            klient: {
                title: "Narrativ - Din Historie",
                text: "Den historie du fortæller om dig selv - 'jeg er altid anspændt', 'jeg kan ikke slappe af' - sidder i din krop, ikke bare i dit hoved. Når kroppen ændrer sig gennem tremor, kan din historie om dig selv også ændre sig. Du opdager gennem direkte oplevelse: 'Jeg KAN faktisk slappe af', 'Min krop VED hvordan man finder ro'. Disse nye erfaringer skaber langsomt en ny selvforståelse. Du behøver ikke at 'overbevise' dig selv mentalt - kroppen viser dig hvad der er muligt, og historien følger med."
            },
            fagfolk: {
                title: "Narrativ Psykologi - Identitetstransformation",
                text: "Autobiografisk narrativ er embodied og tilstandsafhængig - hvordan vi fortæller vores historie påvirkes af vores fysiologiske tilstand. Når autonomt nervesystem reguleres gennem TRE (polyvagal shift), åbnes nye narrative muligheder. TRE faciliterer somatisk re-authoring uden eksplicit verbal processing - kroppen 'fortæller' en ny historie gennem direkte erfaring af kompetence og regulering. Denne embodied transformation er ofte mere overbevisende end kognitiv omstrukturering, fordi den bygger på faktisk somatisk erfaring snarere end ideer om forandring."
            },
            videnskab: {
                title: "Narrativ Neuroscience - Neural Reorganisering",
                text: "Autobiografisk hukommelse konstrueres gennem hippocampus-neocortex interaktion, moduleret af amygdala og autonomt nervesystem-tilstand. State-dependent retrieval betyder at narrativ tilgængelighed ændres med fysiologisk tilstand - i defensive states er kun trauma-narrativer tilgængelige, mens ventral vagal states åbner for mere nuancerede selv-historier. TRE-induceret regulering faciliterer reconsolidation af traumatisk narrativ gennem samtidig activation og ny somatisk information. Narrativ selv emergerer gennem integration af episodic memories med current somatic state."
            },
            sclerose: {
                title: "Din Sclerose-Historie",
                text: "At leve med sclerose former hvordan du ser dig selv: 'jeg er syg', 'min krop svigter mig', 'jeg er begrænset', 'jeg er en byrde'. Disse historier bliver til identitet og påvirker hvordan du lever dit liv. TRE giver kroppen direkte oplevelser af at være kompetent - den KAN regulere sig selv, den KAN slippe spænding, den KAN finde ro, den HAR ressourcer. Disse nye kropserfaringer skaber gradvist en ny historie: 'Min krop har ressourcer', 'Jeg kan påvirke min tilstand', 'Jeg er mere end min sygdom'. Narrativ transformation sker ikke gennem positiv tænkning men gennem embodied erfaring. Hver gang kroppen finder ro gennem tremor, styrkes den nye historie."
            }
        },
        enactivisme: {
            klient: {
                title: "Enactivisme - Aktiv Healing",
                text: "Din healing sker ikke ved at 'grave noget gammelt op' eller 'få noget ud'. I stedet SKABER du aktivt noget nyt hver gang du tremorer. Din krop lærer - gennem at gøre det - at den kan regulere sig selv. Det er som at lære at cykle: kroppen forstår gennem handling, ikke gennem at læse om det. Hver tremor-session er øvelse i selvregulering. Du bygger kompetence gennem gentagelse, ligesom enhver færdighed. Healing er ikke noget der 'sker med dig' - det er noget du aktivt deltager i at skabe."
            },
            fagfolk: {
                title: "Enactivisme - Autopoietisk Reorganisering",
                text: "Varelas enactive cognition: perception og handling er uadskillige - vi bringer verden frem gennem vores handlinger. TRE er ikke ekstraktion af 'lagret' materiale men aktiv enactment af ny sensomotorisk organisation. Tremor er autopoietisk proces - selvskabende, ikke symptom-reducerende. Healing emergerer gennem embodied handling snarere end gennem information-processing. Klienten skaber aktivt nye patterns af regulering gennem at tremor - det er ikke om at 'frigive' noget men om at enacte nye muligheder. Terapeutens rolle er at facilitate denne selvorganiserende proces, ikke at 'behandle' klienten."
            },
            videnskab: {
                title: "Enactivisme - Dynamiske Systemer",
                text: "Autopoietisk teori (Maturana & Varela) beskriver levende systemer som selvorganiserende, operationelt lukkede netværk der kontinuerligt regenererer sig selv. TRE faciliterer emergent reorganisering af sensomotoriske attraktorer gennem perturbation af eksisterende mønstre. Tremor er ikke discharge men kontinuerlig structural coupling mellem organisme og miljø. Nye patterns emergerer gennem dynamisk selvorganisering snarere end gennem ekstraktion af 'lagret' information. Healing er emergent property af systemet, ikke reduktivt til neurokemiske eller muskulære komponenter."
            },
            sclerose: {
                title: "Aktiv Læring med Sclerose",
                text: "Med sclerose er nervesystemet skadet, men neuroplasticitet betyder at nye veje kan dannes og nye patterns kan læres. TRE er ikke passiv behandling men aktiv træning af nervesystemets evne til selvregulering. Hver gang du tremorer, øver kroppen sig i at finde ro, slippe spasticitet, og organisere bevægelse og tonus på nye måder. Det er ikke om at 'fikse' noget ødelagt - det er om at skabe nye funktionelle mønstre inden for de muligheder der er. Med neurologisk skade er gentagelse afgørende. Du bygger nye neurale pathways gennem praksis, ligesom genoptræning efter skade. TRE er selvregulerings-træning der kan praktiseres dagligt."
            }
        },
        levine: {
            klient: {
                title: "Somatic Experiencing - Fuldførelse",
                text: "Når noget skræmmende sker, forbereder kroppen sig på at kæmpe eller flygte - men ofte blev reaktionen afbrudt. Du kunne ikke slås, du kunne ikke løbe. Den energi 'sidder fast' i nervesystemet. Tremor hjælper kroppen med at fuldføre den bevægelse den skulle have lavet dengang - at færdiggøre den afbrudte beskyttelsesreaktion. Det er som at færdiggøre en sætning der blev afbrudt midt i. Når kroppen får lov til at fuldføre, kan den slippe alarmen og vende tilbage til ro. Det behøver ikke at være dramatisk - nogle gange er det bare små bevægelser eller rystelser der løser det fastlåste."
            },
            fagfolk: {
                title: "Somatic Experiencing - Trauma-completion",
                text: "Peter Levines SE model: trauma opstår når defensive orienting responses forbliver incomplete - overlevelsesenergi forbliver 'frozen' i nervesystemet. TRE faciliterer discharge af denne 'frozen' survival energy gennem neurogen tremor. Titration (gradvis dosering) og pendulering (bevægelse mellem aktivering og ro) reorganiserer sensomotoriske mønstre associeret med traumatisk immobilisering. TRE komplementerer SE ved at aktivere tremor-mekanismen direkte, hvilket kan accelerere completion-processen. Vigtigt at arbejde inden for tolerance window så completion sker uden re-traumatisering."
            },
            videnskab: {
                title: "Somatic Experiencing - Neurobiologisk Completion",
                text: "Incomplete defensive responses vedligeholder sympatisk hyperarousal eller dorsal immobilization via brainstem reflexer. Periaqueductal gray (PAG) koordinerer defensive motor programs - når disse ikke completeres, forbliver PAG i aktiveret state. TRE aktiverer completion af disse motoriske programmer gennem oscillerende tremor der faciliterer shift fra defensive til exploratory circuits. Central pattern generators for defensive behaviors (freeze, fight, flight) kan reorganiseres gennem rhythmisk motorisk aktivitet. Tremor fungerer som naturlig completion-mekanisme der er phylogenetisk konserveret hos pattedyr."
            },
            sclerose: {
                title: "Fuldførelse af Stress-respons ved Sclerose",
                text: "Sclerose-diagnosen og sygdomsforløbet er i sig selv traumatisk - pludselig usikkerhed, tab af kontrol, gentagne hospitalsindlæggelser, medicinsk intervention, social stigma. Kroppen kan sidde fast i forsvarsmønstre: kronisk alarm (fight/flight) eller nedlukning (freeze/collapse). Der er måske mange ufærdige stress-reaktioner: det øjeblik du fik diagnosen, det første store tilbageslag, det første hjælpemiddel, sociale konfrontationer. TRE hjælper med at fuldføre disse afbrudte stress-reaktioner. Når kroppen får lov til at færdiggøre defensive mønstre gennem tremor, kan den bevæge sig videre til tilstande af ro og regenerering - essentielt for immunfunktion og symptomhåndtering."
            }
        },
        reich: {
            klient: {
                title: "Bioenergetik - Muskulært Panser",
                text: "Når livet er hårdt, spænder vi kroppen som beskyttelse - og glemmer at slippe igen. Det bliver til mønstre i musklerne ('panser') der holder følelser og energi tilbage. Måske spænder du altid skuldrene, eller holder vejret, eller klemmer i kæben. Disse mønstre startede som beskyttelse men blev til vaner. Tremor hjælper musklerne med at slippe de gamle mønstre, så energi og følelser kan bevæge sig frit igen. Når panseret begynder at smelte, kan du mærke mere - både behagelige og ubehagelige følelser. Det er et tegn på at du kommer tilbage i kontakt med dig selv."
            },
            fagfolk: {
                title: "Bioenergetik - Character Armor",
                text: "Reich og Lowens teori om character armor: kroniske muskelspændinger embodier psykologisk forsvar - muscular holding patterns er ikke kun symptomer men strukturelle komponenter af karakter-struktur. TRE faciliterer mildnelse af armor gennem neurogen tremor, hvilket restaurerer energetisk flow og affektiv tilgængelighed. Som kroppen slipper chroniske holdings, kan fortrængte affects emergere. TRE komplementerer verbal psykoterapi ved at arbejde gennem kroppen - nogle klienter kan først tilgå material verbalt efter somatisk mildnelse. Vigtigt at arbejde med tempo der respekterer defensive funktioner af armor."
            },
            videnskab: {
                title: "Bioenergetik - Fascial og Muskulær Reorganisering",
                text: "Kronisk muskelspænding modificerer fascial viscoelastiske egenskaber og proprioceptiv signalering - fascia reorganiserer sig efter sustained mechanical load. TRE-induceret tremor reorganiserer myofasciale holding patterns gennem rhythmisk belastning og mekanisk stimulation. Piezoelectriske effekter i fascia kan modificere cellular signaling. Tremor ændrer både strukturelle komponenter (fascial densitet, collagen orientation) og neurale komponenter (proprioceptiv recalibration, central representation af body schema). Myofascial release gennem tremor faciliteres af oscillerende load der gradualt modificerer tissue properties."
            },
            sclerose: {
                title: "Spasticitet og Muskulært Panser ved Sclerose",
                text: "Ved sclerose er der to lag af muskelspænding: neurologisk spasticitet fra demyelinisering og psykologisk muskulært panser fra forsvar og kompensation. Spasticiteten kommer fra skadede neurale pathways, men oveni ligger ofte ekstra spænding - et 'panser' af kronisk kontraktion fra at skulle 'holde sammen', 'kæmpe', 'ikke give op'. TRE arbejder med begge lag: Den neurologiske spasticitet mildnes gennem nervesystem-regulering (når autonome nervesystem finder ro, reduceres tonus), og det psykologiske panser får lov til at slippe. Når begge typer spænding reduceres, forbedres mobilitet, smerte og energiniveau markant. Mange oplever at spasticitet som føltes 'hård' og neurologisk pludselig har en 'blødere' komponent der kan slippe."
            }
        },
        psykologi: {
            klient: {
                title: "Klinisk Psykologi - Sikkerhed og Relation",
                text: "For at din krop kan slippe må du føle dig sikker. En terapeut eller guide skaber det trygge rum hvor tremor kan ske. Det handler ikke kun om teknikken - men også om at du føler dig set, hørt og accepteret som den du er. Healing sker i relationer, ikke i isolation. Din krop 'låner' ro fra terapeutens rolige tilstedeværelse. Gradvist lærer dit nervesystem at det er sikkert at slippe. En god terapeut følger dit tempo, respekterer dine grænser og lader kroppen bestemme hvor meget der sker hvornår. Du er ikke alene i processen."
            },
            fagfolk: {
                title: "Klinisk Psykologi - Terapeutisk Relation",
                text: "TRE effektivitet afhænger fundamentalt af terapeutisk alliance og co-regulering. Providers embodied tilstedeværelse faciliterer klientens neuroceptive oplevelse af sikkerhed (polyvagal social engagement). Integration af somatisk arbejde med psykologisk forståelse af attachment, dissociation, titration og therapeutic window er essentiel. Relationel neurobiologi i praksis: terapeutens regulerede nervesystem fungerer som external regulator der co-regulerer klientens autonome system. Særligt vigtigt ved kompleks trauma hvor attachment er unsecure - terapeutisk relation bliver den sikre base hvorfra somatisk exploration kan ske."
            },
            videnskab: {
                title: "Klinisk Psykologi - Interpersonal Neurobiology",
                text: "Terapeutisk relation modificerer klientens autonomt nervesystem via social engagement system - vagale pathways fra nucleus ambiguus til hjerte og ansigtsmuskulatur faciliterer co-regulering. Terapeuts egen regulering co-regulerer klient gennem mirror neurons og interbrain synchrony (physiological synchronization mellem dyad members). TRE effectiveness medieres af attachment security (earned eller natural) og therapeutic alliance quality. Affect regulation gennem relationel containment er evolutionært primær mekanisme - infant regulation through caregiver presence. TRE reaktiverer denne developmental mechanism i terapeutisk context."
            },
            sclerose: {
                title: "Terapeutisk Relation ved Sclerose",
                text: "Med sclerose er kroppen ofte et sted fyldt med svigt, smerte, skam og frygt. 'Min krop forråder mig', 'Jeg taber kontrol', 'Jeg bliver afhængig'. At turde tremor - at turde slippe kontrol, at lade kroppen gøre noget du ikke styrer - kræver dyb sikkerhed. En terapeut der forstår både sclerose og TRE, som selv er rolig og til stede i kroppen, skaber det containment der gør transformation mulig. Terapeutens forståelse af sygdommen betyder du slipper for at forklare eller retfærdiggøre. Relationel sikkerhed er ikke 'nice to have' men fysiologisk nødvendigt - terapeutens regulerede nervesystem co-regulerer dit gennem tilstedeværelse, accept og ikke-dømmende witnessing."
            }
        }
    },
    connections: {
        'tre-polyvagal': {
            klient: "Tremor hjælper dit nervesystem med at skifte fra alarm eller nedlukning tilbage til ro og sikkerhed. Det er kroppens naturlige måde at komme tilbage i balance på - som når dyr ryster efter fare.",
            fagfolk: "TRE faciliterer polyvagal regulering fra sympatisk/dorsal tilstand til ventral vagal sikkerhed gennem proprioceptiv stimulation og neuroceptive signaler om environmental safety.",
            videnskab: "Neurogen tremor modulerer vagal efferens og nedregulerer amygdala-respons via brainstem circuits, faciliterende shift fra defensive til social engagement autonomic states gennem afferent feedback.",
            sclerose: "Ved sclerose er nervesystemet ofte i kronisk stress-tilstand, hvilket forværrer inflammation og symptomer. TRE's tremor-mekanisme hjælper nervesystemet tilbage til ro-tilstand hvor healing og regenerering kan ske - kritisk for symptomkontrol og livskvalitet."
        },
        'tre-narrative': {
            klient: "Når din krop tremorer og finder ro, kan du fortælle en ny historie om dig selv. Kropserfaringer skaber nye selvforståelser - ikke gennem positiv tænkning men gennem levede oplevelser.",
            fagfolk: "Somatisk transformation gennem TRE faciliterer narrativ re-authoring uden verbal processing. State-change åbner for nye autobiografiske konstruktioner gennem state-dependent memory access.",
            videnskab: "TRE-induceret autonomt nervesystem-regulering modificerer state-dependent narrative retrieval og faciliterer memory reconsolidation gennem hippocampal-prefrontal interaktion under nye somatiske conditions.",
            sclerose: "Sclerose-diagnosen skaber en dominerende narrativ: 'jeg er syg', 'kroppen svigter', 'jeg er begrænset'. TRE giver gentagne oplevelser af kropslig kompetence - nervesystemet KAN regulere, muskler KAN slippe - som gradvist transformerer selvopfattelsen til 'jeg har ressourcer', 'jeg kan påvirke min tilstand'."
        },
        'tre-enactivisme': {
            klient: "Hver gang du tremorer, skaber din krop aktivt ny viden om hvordan den kan regulere sig selv. Du lærer gennem at gøre, ikke gennem at tænke - kroppen forstår gennem handling.",
            fagfolk: "TRE er enactment af ny sensomotorisk organisation, ikke ekstraktion af 'lagret' materiale. Tremor er aktiv bringing-forth af ny kompetence gennem embodied practice.",
            videnskab: "Tremor faciliterer autopoietisk reorganisering gennem perturbation af eksisterende sensomotoriske attraktorer. Ny koordination emergerer gennem embodied action, ikke information-processing - structural coupling modificeres gennem continuous sensorimotor engagement.",
            sclerose: "Med neurologisk skade er neuroplasticitet afgørende. TRE er ikke passiv symptombehandling men aktiv træning i selvregulering. Hver tremor-session er øvelse i at skabe nye funktionelle mønstre - kroppen lærer gennem at gøre det, byggende nye neurale veje gennem gentagelse og praksis."
        },
        'tre-levine': {
            klient: "Tremor hjælper kroppen med at fuldføre den kamp- eller flugt-reaktion der blev afbrudt under stress. Når den afbrudte reaktion får lov at færdiggøre, kan nervesystemet slippe alarmen.",
            fagfolk: "TRE faciliterer completion af incomplete defensive responses via neurogen discharge. Metoden komplementerer SE's titration og pendulering ved at aktivere tremor-mekanismen direkte.",
            videnskab: "Tremor aktiverer completion af motoriske programmer gennem periaqueductal gray (PAG) og central pattern generators, resolverende frozen defensive states via oscillerende motorisk aktivitet der faciliterer state-shifts.",
            sclerose: "Sclerose-diagnosen og forløbet er traumatisk - diagnosechok, hospitalsindlæggelser, tab af funktion, social stigma. TRE hjælper med at fuldføre de afbrudte stress-reaktioner fra disse events, så kroppen kan bevæge sig fra forsvar til ro - essentielt for at immunfunktion og healing kan ske."
        },
        'tre-reich': {
            klient: "Tremor hjælper de spændte muskler med at slippe gamle beskyttelsesmønstre. Når panseret smelter, kan energi og følelser flyde frit igen - du kommer tilbage i kontakt med dig selv.",
            fagfolk: "TRE mildner character armor gennem neurogen tremor, restaurerende energetisk flow og reducerende kronisk muskulær holding. Som armor slipper, kan fortrængte affects emergere.",
            videnskab: "Tremor reorganiserer myofasciale holding patterns gennem rhythmisk mekanisk stimulation, modificerende både fascial visco-elasticitet, collagen orientation og proprioceptiv signalering via sustained oscillating load.",
            sclerose: "Ved sclerose er der både neurologisk spasticitet og psykologisk muskulært panser fra kompensation. TRE arbejder med begge lag - mildner spasticitet gennem nervesystem-regulering og løsner det kompensatoriske panser ('jeg må holde sammen'), hvilket forbedrer mobilitet og reducerer smerte markant."
        },
        'tre-psykologi': {
            klient: "Med en tryg terapeut kan din krop turde tremor - sikkerhed i relationen muliggør healing i kroppen. Du 'låner' ro fra terapeutens rolige tilstedeværelse indtil dit eget nervesystem lærer det.",
            fagfolk: "Terapeutisk alliance og co-regulering faciliterer TRE's effectiveness gennem neuroceptiv sikkerhed. Provider holder safe container for somatisk processing, fungerende som external regulator.",
            videnskab: "Providers regulerede autonome tilstand co-regulerer klient via social engagement system og interbrain synchrony, sikrende ventral vagal support under tremor through physiological coupling mellem dyad members.",
            sclerose: "Med sclerose er kroppen ofte forbundet med svigt og frygt. At turde tremor - at slippe kontrol - kræver dyb sikkerhed. En terapeut der forstår både sclerose og TRE skaber det containment der gør transformation mulig - relationel sikkerhed er fysiologisk nødvendigt for at nervesystemet tør slippe forsvarstilstand."
        },
        'polyvagal-narrative': {
            klient: "Når nervesystemet skifter til sikker tilstand, bliver nye måder at tænke om dig selv mulige. I alarm-tilstand er kun katastrofe-tanker tilgængelige. I ro-tilstand åbnes for nuancerede perspektiver.",
            fagfolk: "Autonomt nervesystem-tilstand (polyvagal) påvirker hvilken narrativ der kan konstrueres og tilgås. Ventral vagal åbner for fleksibel self-authoring gennem state-dependent memory retrieval.",
            videnskab: "Autonomt nervesystem-tilstand modulerer hippocampal consolidation og præfrontal narrative integration. State-dependent memory betyder narrativ tilgængelighed varierer systematisk med vagal tone - defensive states restrikterer narrative flexibility.",
            sclerose: "I kronisk stress-tilstand dominerer katastrofe-narrativer: 'jeg går i stykker', 'det bliver kun værre'. Når TRE bringer nervesystemet i ro, åbnes kognitivt rum for mere balanced perspektiver på sygdom og liv - fra 'kun syg' til 'lever med sclerose og har kompleksitet, udfordringer OG ressourcer'."
        },
        'polyvagal-enactivisme': {
            klient: "Din oplevelse af sikkerhed eller fare skabes aktivt af dig gennem hvordan du møder verden - ikke bare registreret passivt. Du deltager i at skabe din virkelighed gennem dine handlinger.",
            fagfolk: "Neuroception (Porges) er enactive perception - aktiv bringing-forth af betydning, ikke passiv detektion. Perception og autonomic response co-emerge gennem embodied evaluation.",
            videnskab: "Polyvagal neuroception demonstrerer enactive princip perfekt: autonomic evaluation og environmental response co-constitute gennem continuous sensorimotor coupling - sikkerhed bringes frem gennem action, ikke kun detekteret.",
            sclerose: "Neuroception ved sclerose er ofte fejljusteret - kroppen læser konstant 'fare' selv i objektive sikre situationer (hypervigilance). TRE træner aktivt nervesystemet i at bringe frem oplevelser af sikkerhed gennem tremor-praksis - ikke om at fikse defekt detektor men skabe ny kompetence i at enacte sikkerhed."
        },
        'polyvagal-levine': {
            klient: "Systemet skal først være i sikker tilstand før den afbrudte stress-reaktion kan fuldføres. Uden sikkerhed bliver fuldførelse re-traumatisering. Først ro, så fuldførelse.",
            fagfolk: "Ventral vagal aktivering er forudsætning for sikker completion af incomplete defensive responses (Levine). Polyvagal sikkerhed er fundament for SE - completion uden ventral support risikerer overwhelm.",
            videnskab: "Polyvagal state hierarchy: freeze-discharge sekvens kræver sufficient ventral vagal tone for sikker mobilisering. Completion af defensive programs uden adequate ventral support resulterer i re-traumatization gennem uncontained sympathetic activation.",
            sclerose: "Med sclerose sidder kroppen ofte fast i forsvarstilstand - kronisk alarm eller nedlukning. TRE skal først etablere sikkerhed (ventral vagal tone) før traumatiske elementer fra sygdomsforløbet kan arbejdes igennem. Derfor vigtigt at gå langsomt, respektere tempo, bygge sikkerhed gradvist."
        },
        'polyvagal-reich': {
            klient: "Muskulært panser er kroppens måde at blive i alarm-tilstand på. Når TRE bringer nervesystemet i ro, begynder panseret automatisk at smelte - spænding er ikke nødvendig når du er sikker.",
            fagfolk: "Character armor (Reich) manifesterer kronisk sympatisk aktivering eller dorsal immobilisering (Porges). Armor er somatisk embodiment af defensive autonomic states - muscular holding vedligeholder dysregulation.",
            videnskab: "Reichian armor er somatisk manifestation af dysreguleret autonomt nervesystem - myofascial holding patterns vedligeholder og reflekterer non-ventral vagal states gennem kontinuerlig proprioceptiv feedback der reinforcerer defensive posture.",
            sclerose: "Spasticitet ved sclerose er delvist neurologisk (demyelinisering), delvist autonomt nervesystem-drevet (defensive tonus). Når TRE bringer nervesystemet i ro, reduceres den autonome komponent af spasticiteten markant - det der føltes 'hårdt neurologisk' har ofte en 'blød' komponent der kan slippe."
        },
        'polyvagal-psykologi': {
            klient: "En rolig terapeut hjælper dit nervesystem med at finde ro - sikkerhed smitter relationelt. Nervesystemer synkroniserer når mennesker er sammen - du 'fanger' terapeutens ro.",
            fagfolk: "Terapeutens ventral vagal tilstand co-regulerer klientens nervesystem gennem social engagement. Embodied presence er ikke metafor men fysiologisk mekanisme - autonomic synchrony sker automatisk i secure relational context.",
            videnskab: "Provider's autonomic state influences client's via ventral vagal pathways - interpersonal neurobiological synchrony gennem prosody, facial expression, body posture og direct autonomic resonance. Mirror neurons og interbrain coupling faciliterer physiological co-regulation.",
            sclerose: "Ved sclerose hvor nervesystemet er dysreguleret og ofte fastlåst i defensive states, er co-regulering gennem terapeutisk relation afgørende. Terapeutens rolige tilstedeværelse giver nervesystemet en 'ekstern regulator' at låne fra - gradvist lærer systemet at finde denne tilstand selv."
        },
        'narrative-enactivisme': {
            klient: "Din livshistorie skabes gennem hvordan du lever og handler i verden, ikke kun gennem tanker. Du skriver din historie gennem at leve den - gennem dine valg og handlinger hver dag.",
            fagfolk: "Narrativ identitet er autopoietisk - kontinuerligt enacted gennem lived experience, ikke statisk lagret. Self er emergent process der skabes gennem hvordan vi handler, ikke stored structure vi 'har'.",
            videnskab: "Narrative self emergerer gennem sensomotorisk enactment - autobiografisk memory er dynamisk reconstruction gennem current embodied state, ikke arkival retrieval af fixed content. Self-story lives gennem continuous re-enactment.",
            sclerose: "Sclerose-identitet skabes ikke kun gennem tanker men gennem daglige handlinger og oplevelser. TRE giver gentagne embodied erfaringer af kompetence (nervesystemet regulerer, kroppen finder ro) som gradvist omskriver den levede narrativ fra 'passiv patient' til 'aktiv agent med ressourcer'."
        },
        'narrative-levine': {
            klient: "Når kroppen fuldender stress-reaktionen, kan historien om 'hvad der skete' også ændre sig. Event er stadig samme, men mening og følelse ændres når kroppen ikke længere er fastlåst.",
            fagfolk: "Completion af traumatisk respons (Levine) åbner for narrativ transformation. Når 'frozen' energy resolves, kan historien bevæge sig videre - event forbliver men loses its immobilizing quality.",
            videnskab: "Somatic completion modificerer episodic memory encoding. Traumatic narrative loses its 'frozen', intrusive quality når defensive response completeres, faciliterende memory reconsolidation under nye somatiske conditions without incomplete arousal.",
            sclerose: "Diagnosechok og sygdomsforløb skaber fastlåst traumatisk narrativ - 'den dag mit liv stoppede', 'før/efter diagnosen'. Når TRE hjælper med completion af disse defensive responser, kan historien bevæge sig fra 'frossen i katastrofe' til 'jeg har overlevet og bevæger mig videre med det jeg har'."
        },
        'narrative-reich': {
            klient: "Hvordan du holder kroppen fortæller historien om 'hvem du må være'. Spændte skuldre siger 'jeg må bære byrden'. Knuget bryst siger 'jeg må beskytte hjertet'. Tremor ændrer holdning OG historie.",
            fagfolk: "Character armor (Reich) embodier narrativ identitet - muskulær holding bærer implicit selv-historie. Somatisk struktur ER autobiography, ikke kun reflekterer den. Postural patterns encode life story.",
            videnskab: "Myofascial patterns encode implicit autobiographical memory through proprioceptive representations. Somatic armor IS embodied narrative structure - self-story lived gennem postural, respiratory og muscular patterns that constitute bodily self-schema.",
            sclerose: "Spasticitet og kompensatorisk holding ved sclerose embodier historien 'jeg må holde sammen', 'jeg må kæmpe', 'jeg kan ikke slappe af'. Når TRE mildner disse holdings - både den neurologiske spasticitet og det psykologiske panser - ændres den implicitte selvfortælling til 'jeg kan slippe', 'jeg kan modtage støtte', 'jeg kan være blød'."
        },
        'narrative-psykologi': {
            klient: "En god terapeut hjælper dig med at fortælle din historie på nye måder. Ikke om at overbevise dig om noget, men om at finde mere nuancerede sandheder sammen - du er medforfatter.",
            fagfolk: "Terapeutisk relation faciliterer narrativ re-authoring. Terapeut holder rum for transformativ storytelling - witness og co-constructor. Ikke om at 'fix' klientens historie men collaborativt discover nye perspektiver.",
            videnskab: "Therapeutic narrative co-construction modulates autobiographical memory reconsolidation gennem social engagement. Interpersonal context shapes memory encoding, retrieval og reconsolidation - narrative ændres gennem relational co-creation.",
            sclerose: "Sclerose-narrativen kan blive totaliserende og reduktiv: 'jeg er kun min sygdom'. En terapeut hjælper med at finde mere nuancerede historier gennem spørgsmål og witnessing: ikke 'jeg er syg' men 'jeg lever med sclerose og har kompleksitet, udfordringer, ressourcer, relationer, værdi, bidrag'."
        },
        'enactivisme-levine': {
            klient: "Kroppen lærer gennem at gøre - ikke ved at tænke over eller analysere. Tremor ER læringen selv, ikke forberedelsen til læring. Healing sker i handlingen, ikke i forståelsen.",
            fagfolk: "Levines pendulering er cirkulær enactment - ikke lineær discharge men kontinuerlig reorganisering gennem perception-action cycles. Healing emergerer gennem sensorimotor cycling, ikke cognitive processing.",
            videnskab: "SE completion demonstrerer enactive principle perfectly: perception-action loops reorganize gennem embodied engagement. Healing emergerer gennem sensorimotor cycling, ikke information-processing - oscillation mellem states faciliterer autopoietic reorganization.",
            sclerose: "Med neurologisk skade er gentagelse essentiel - nye pathways dannes gennem praksis. Hver TRE-session er ikke 'behandling' man modtager men træning man gør - kroppen øver sig i selvregulering gennem at gøre det, byggende nye neurale veje en tremor ad gangen."
        },
        'enactivisme-reich': {
            klient: "Panseret er ikke noget 'lagret' du har - det er noget du aktivt gør hver dag gennem hvordan du holder kroppen. Tremor lærer nye måder at holde og være på - nye patterns erstatter gamle.",
            fagfolk: "Character armor er ikke statisk struktur men kontinuerlig autopoietisk 'holding pattern' - aktiv selvbegrænsning der recreates sig selv momentto-moment. Healing er om at enacte nye patterns, ikke remove gamle structures.",
            videnskab: "Reichian armor er dynamisk process, ikke static structure - autopoietic maintenance af defensive sensomotorisk organization gennem kontinuerlig muscular tonus regulation. Tremor perturberer dette selvopretholdelses-system, faciliterende emergence af nye organizational patterns.",
            sclerose: "Spasticitet ved sclerose vedligeholdes delvist gennem kontinuerlig muskulær activation - både neurologisk og volitional. TRE lærer kroppen nye mønstre af afslappelse - ikke om at 'slå spasticitet fra' (kan ikke lade sig gøre) men om at enacte nye muligheder for tonus-regulering inden for neurologiske begrænsninger."
        },
        'enactivisme-psykologi': {
            klient: "Terapeut og klient skaber sammen et rum hvor ny måde at være kan opstå. Det er ikke om at terapeuten 'fikser' dig - det er om at I sammen opdager nye muligheder, nye måder at være på.",
            fagfolk: "Healing er co-enactment, ikke transmission. Terapeut og klient bringer sammen emergent organisation frem gennem relationel coupling - healing emergerer i relationen, ikke transmitteres fra terapeut til klient.",
            videnskab: "Therapeutic dyad constitutes autopoietic system - healing emerges gennem structural coupling between members. Bidirectional influence creates novel organization irreducible til individuelle komponenter - relational space som emergent property.",
            sclerose: "TRE med sclerose er samskabelse: terapeut og klient finder sammen nye måder kroppen kan være på inden for sygdommens begrænsninger og muligheder. Ikke om at terapeuten 'fixe' klienten eller 'gør noget ved' sclerosen men collaborativt co-enacte nye funktionelle patterns."
        },
        'levine-reich': {
            klient: "Den afbrudte flugt-reaktion (Levine) og det muskulære panser (Reich) er to sider af samme sag - begge holder fast i stedet for at slippe. Når den ene løses, letter den anden.",
            fagfolk: "Levines incomplete response og Reichs frozen energy beskriver samme fænomen fra forskellige teoretiske vinkler. Sympatisk mobilisering uden discharge (Levine) embodier sig som character armor (Reich).",
            videnskab: "SE incompletion og bioenergetisk armor refererer begge til sustained brainstem defensive activation uden resolution. Myofascial holding embodier incomplete fight/flight through continuous proprioceptive signaling maintaining defensive posture.",
            sclerose: "Ved sclerose er der både frozen trauma-energi fra sygdomsforløbet (diagnosechok, tilbageslag, tab) og spastisk muskulært panser. TRE arbejder med begge simultant: completion af afbrudte responser OG mildnelse af kronisk muskulær holding - to sider af samme mønt."
        },
        'levine-psykologi': {
            klient: "Kun i et trygt rum kan kroppen turde fuldføre den stress-reaktion den holder tilbage. Uden sikkerhed bliver fuldførelse re-traumatisering. Relation er fundamentet for healing.",
            fagfolk: "Titration og pendulering (Levine) kræver terapeutisk co-regulering. Sikker base for at bevæge gennem activation uden at blive overwhelmed - terapeut fungerer som external regulator under completion.",
            videnskab: "SE methodology requires therapeutic containment fundamentally. Pendulation mellem activation/deactivation necessitates relational safety - terapeut fungerer som external regulator providing ventral vagal support during mobilization states.",
            sclerose: "At arbejde med traumatiske elementer af sclerose (diagnosechok, tab af funktion, social stigma, usikkerhed om fremtid) kræver solid terapeutisk containment. TRE-facilitator holder det sikre rum hvor activation kan emergere og resolves uden at overwhelme - særligt vigtigt ved sclerose hvor systemet allerede er vulnerabelt."
        },
        'reich-psykologi': {
            klient: "Terapeuten skal selv være afslappet og til stede i kroppen for at hjælpe dig. Spænding smitter - men afslappethed smitter også. Du 'lærer' regulering gennem at være sammen med nogen der er reguleret.",
            fagfolk: "Terapeutens embodiment påvirker klientens direkte gennem autonomic synchrony og mirror neurons. Bioenergetisk resonans er ikke metafor men faktisk co-regulering gennem embodied presence - terapeuts somatic state matters profoundly.",
            videnskab: "Provider's somatic state influences client via mirror neurons og autonomic synchrony. Embodied countertransference - terapeuts musculoskeletal holding patterns affect client's nervous system gennem proprioceptive mirroring og interoceptive resonance.",
            sclerose: "Med sclerose hvor kroppen er spastisk, spændt, og ofte i alarm, er terapeutens embodied afslappethed en kraftfuld intervention i sig selv. Spejlneuroner og autonomisk synkronisering betyder at terapeutens ro, bløde vejrtrækning og afslappede muskulatur direkte påvirker klientens nervesystem - modeling af regulering gennem presence."
        }
    }
};

// Mapping til cirkel navne
const circleNames = {
    tre: 'TRE',
    polyvagal: 'Polyvagal teori',
    narrative: 'Wired for Story',
    enactivisme: 'Enactivisme',
    levine: 'Somatic Experiencing',
    reich: 'Bioenergetik',
    psykologi: 'Klinisk Psykologi'
};

// State management
let currentMode = 'klient';
let currentView = 'welcome';
let currentCircle = null;
let currentConnection = null;

// ALTID nulstil når side loader
window.addEventListener('load', () => {
    resetToWelcome();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupModeButtons();
    setupCircleClicks();
    setupConnectionClicks();
    resetToWelcome(); // Start altid med velkomst
});

// Nulstil til velkomst
function resetToWelcome() {
    currentView = 'welcome';
    currentCircle = null;
    currentConnection = null;
    currentMode = 'klient';
    
    // Reset mode buttons
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.mode === 'klient') {
            btn.classList.add('active');
        }
    });
    
    clearAllActive();
    showWelcome();
}

// Mode selector - med auto-scroll og visuel feedback
function setupModeButtons() {
    const buttons = document.querySelectorAll('.mode-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Visual feedback
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentMode = btn.dataset.mode;
            
            // Flash effekt
            const infoPanel = document.getElementById('info-content');
            infoPanel.style.opacity = '0.3';
            setTimeout(() => {
                infoPanel.style.opacity = '1';
            }, 150);
            
            // Opdater indhold
            if (currentView === 'circle' && currentCircle) {
                showCircleView(currentCircle);
            } else if (currentView === 'connection' && currentConnection) {
                showConnectionView(currentConnection.from, currentConnection.to, currentConnection.fromCircle);
            }
            
            // Auto-scroll til info panel
            setTimeout(() => {
                const infoPanel = document.getElementById('info-panel');
                infoPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 200);
        });
    });
}

// Welcome screen
function showWelcome() {
    currentView = 'welcome';
    currentCircle = null;
    currentConnection = null;
    clearAllActive();
    
    document.getElementById('info-content').innerHTML = `
        <h2>Velkommen til TRE Forståelsesmodellen</h2>
        <p>Denne interaktive model viser hvordan TRE virker gennem seks forskellige perspektiver.</p>
        <p><strong>Sådan bruger du modellen:</strong></p>
        <ul>
            <li>Klik på en cirkel for at udforske det perspektiv</li>
            <li>Skift mellem niveauer øverst for at se tilpasset indhold</li>
            <li>Brug "Tilbage" knappen for at navigere</li>
        </ul>
    `;
}

// Circle clicks
function setupCircleClicks() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            const id = circle.dataset.id;
            showCircleView(id);
        });
    });
}

// Vis cirkel view
function showCircleView(circleId) {
    currentView = 'circle';
    currentCircle = circleId;
    currentConnection = null;
    clearAllActive();
    
    // Aktiver KUN denne cirkel (ikke TRE)
    if (circleId !== 'tre') {
        const circle = document.querySelector(`[data-id="${circleId}"]`);
        if (circle) circle.classList.add('active');
    }
    
    // Vis info
    const data = content.circles[circleId][currentMode];
    const connectedCircles = getConnectedCircles(circleId);
    
    let connectionsHTML = '';
    if (connectedCircles.length > 0) {
        connectionsHTML = `
            <div class="connection-list">
                <p><strong>Se hvordan ${circleNames[circleId]} hænger sammen med:</strong></p>
                ${connectedCircles.map(targetId => {
                    const targetName = circleNames[targetId];
                    return `
                        <div class="connection-item" onclick="showConnectionView('${circleId}', '${targetId}', '${circleId}')">
                            <div class="connection-item-title">→ ${targetName}</div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }
    
    document.getElementById('info-content').innerHTML = `
        <div style="margin-bottom: 20px;">
            <button onclick="showWelcome()" style="background: none; border: none; color: #447BB3; font-size: 1rem; cursor: pointer; font-family: 'Times New Roman', Times, serif; padding: 8px 0;">← Tilbage til oversigt</button>
        </div>
        <h2>${data.title}</h2>
        <p>${data.text}</p>
        ${connectionsHTML}
    `;
}

// Connection view
function showConnectionView(from, to, fromCircle) {
    currentView = 'connection';
    currentConnection = { from, to, fromCircle };
    clearAllActive();
    
    // Aktiver de to cirkler og linjen (men ikke TRE)
    if (from !== 'tre') {
        const circle1 = document.querySelector(`[data-id="${from}"]`);
        if (circle1) circle1.classList.add('active');
    }
    if (to !== 'tre') {
        const circle2 = document.querySelector(`[data-id="${to}"]`);
        if (circle2) circle2.classList.add('active');
    }
    
    // Find og aktiver linjen
    let line = document.querySelector(`[data-from="${from}"][data-to="${to}"]`);
    if (!line) {
        line = document.querySelector(`[data-from="${to}"][data-to="${from}"]`);
    }
    if (line) line.classList.add('active');
    
    // Vis connection info
    const key1 = `${from}-${to}`;
    const key2 = `${to}-${from}`;
    const connectionData = content.connections[key1] || content.connections[key2];
    
    if (!connectionData) {
        document.getElementById('info-content').innerHTML = `
            <div style="margin-bottom: 20px;">
                <button onclick="showCircleView('${fromCircle}')" style="background: none; border: none; color: #447BB3; font-size: 1rem; cursor: pointer; font-family: 'Times New Roman', Times, serif; padding: 8px 0;">← Tilbage til ${circleNames[fromCircle]}</button>
            </div>
            <h2>Forbindelse ikke fundet</h2>
        `;
        return;
    }
    
    const text = connectionData[currentMode];
    const fromName = circleNames[from];
    const toName = circleNames[to];
    
    document.getElementById('info-content').innerHTML = `
        <div style="margin-bottom: 20px;">
            <button onclick="showCircleView('${fromCircle}')" style="background: none; border: none; color: #447BB3; font-size: 1rem; cursor: pointer; font-family: 'Times New Roman', Times, serif; padding: 8px 0;">← Tilbage til ${circleNames[fromCircle]}</button>
        </div>
        <h2>Dynamik: ${fromName} ↔ ${toName}</h2>
        <p><strong>${text}</strong></p>
    `;
}

// Globale funktioner
window.showWelcome = showWelcome;
window.showCircleView = showCircleView;
window.showConnectionView = showConnectionView;

// Find forbundne cirkler
function getConnectedCircles(circleId) {
    const allCircles = ['tre', 'polyvagal', 'narrative', 'enactivisme', 'levine', 'reich', 'psykologi'];
    return allCircles.filter(id => {
        if (id === circleId) return false;
        const key1 = `${circleId}-${id}`;
        const key2 = `${id}-${circleId}`;
        return content.connections[key1] || content.connections[key2];
    });
}

// Connection clicks fra SVG
function setupConnectionClicks() {
    const connections = document.querySelectorAll('.connection');
    connections.forEach(line => {
        line.addEventListener('click', (e) => {
            e.stopPropagation();
            const from = line.dataset.from;
            const to = line.dataset.to;
            const fromCircle = from === 'tre' ? to : from;
            showConnectionView(from, to, fromCircle);
        });
    });
}

// Clear all active - TRE forbliver GRÅ
function clearAllActive() {
    document.querySelectorAll('.circle:not([data-id="tre"])').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.connection').forEach(c => c.classList.remove('active'));
}
