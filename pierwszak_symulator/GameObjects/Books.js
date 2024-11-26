window.showHint = () => {
    document.querySelectorAll(".first").forEach(el => {
        if(el.style.textDecoration == "underline"){
            el.style.textDecoration = ""
        }else{
            el.style.textDecoration = "underline"
        }
    })
}

window.books = [
    {
        id: "room1_hint",
        title: "",
        author: "",
        text: `
        <p></p><span class="first">T</span>ęsknota w sercu jak ogień się pali,<br/>
                <span class="first">R</span>ozwiewa cienie, choć ból wciąż się żali.<br/>
                <span class="first">I</span>skra nadziei rozświetla ciemności,<br/>
                <span class="first">S</span>zeptem się zbliża, by przynieść miłości.<br/>
                <span class="first">T</span>ajemny uścisk, co czas zatrzymuje,<br/>
                <span class="first">A</span>ż cały świat w naszych dłoniach pulsuje.<br/>
                <span class="first">N</span>ic więcej nie chcę, prócz ciebie, kochany.<p></p>
                <span style="color: #470707;cursor: pointer;" onclick="window.showHint()">Podpowiedź</span>
                `
    },
    {
        id: "tristan_i_izolda",
        title: "Tristan i Izolda",
        author: "",
        text: `<p></p>Prując glębokie f<i>a</i>le statek unosił Izoldę. Ale im bardziej oddalał się od ziemi irlandzkiej, tym bardziej młoda dziewczyna czuła w sercu żałość. Siedząc w namiocie, w którym zamk<i>n</i>ęła się z Brangien, służebnicą wierną, płakała wspominając swój kraj. Dokąd ją wiozą ci cudzoziemcy? Do kogo? Na jaki los? Kiedy <i>T</i>ristan zbliżał się i chciał ją uspokajać łagodnymi słowy, gni<i>e</i>wała się, odtrącała go i nienawiść wzdymała jej se<i>r</i>ce. Przybył on, rabuśnik, on, morderz Morhołtowy, wydarł ją podstępem matce i ziemi rodzinnej; nie raczył zachować jej dla sameg<i>o</i> siebie i oto uwozi ją jako łup ku nieprzyjacielskiej ziemi! "Nieszczęsna! - myślała <i>s</i>obie. - Przeklęte niech będzie morze, które mnie nosi! Radziej wolałabym umrzeć w ziemi, gdzie się zrodziłam, niż żyć tam..."<p></p>`
    },
    {
        id: "ulysses",
        title: "Ulysses",
        author: "",
        text: `<p></p>Dostojnie postąpił ku przodowi i wszedł na okrągłą działobitnię. Rozejrzał się i z powagą po trzykroć pobłogosławił wieżę, okolicę i budzące się góry. Później, dostrzegłszy Stefana Dedalusa, pochylił się ku niemu, kreśląc w powietrzu szybkie znaki krzyża, bełkocąc gardłowo i potrząsając głową. Niezadowolony i senny Stefan Dedalus wsparł ręce na krawędzi wylotu schodów i obrzucił zimnym spojrzeniem rozedrganą, bełkocącą, błogosławiącą go długą końską twarz i jasne, nie przycięte włosy, cętkowane i lśniące na podobieństwo jasnego dębu.<p></p>`
    },
    {
        id: "donkiszot",
        title: "Don Kichot",
        author: "",
        text: `<p></p>Pobiegli więc wszyscy na plac boju, gdzie zastali Don Kichota w najdziwaczniejszym rynsztunku: miał na sobie tylko koszulę, która mu z przodu ledwie do połowy ud dostawała, a w tyle o ćwierć łokcia najmniej była krótsza; nogi długie, suche, włosami zarosłe, a do tego brudne, przepocona mycka, niegdyś czerwona, a teraz dziwnie wątpliwego koloru na głowie, przez lewe ramię przewieszona kołdra i w ręku miecz goły, oto jego obraz. Mieczem tym bił i rąbał zapamiętale w prawo i w lewo, wykrzykując tak gwałtownie, jak gdyby naprawdę walczył z najstraszliwszym jakimś nieprzyjacielem. Przy tym wszystkim wszakże najdziwniejszą zapewne było rzeczą, że oczy miał najzupełniej zamknięte.<p></p>`
    },
    {
        id: "hamlet",
        title: "Hamlet",
        author: "",
        text: `<p></p>Jakkolwiek świeżo tkwi w naszej pamięci<br/>
                        Zgon kochanego, drogiego naszego<br/>
                        Brata Hamleta, jakkolwiek by przeto<br/>
                        Sercu naszemu godziło się w ciężkim<br/>
                        Żalu pogrążyć, a całemu państwu<br/>
                        Zawrzeć się w jeden fałd kiru, o tyle<br/>
                        Jednak rozwaga czyni gwałt naturze,<br/>
                        Że pomnąc o nim, nie zapominamy<br/>
                        O sobie samych. Dlatego — z zatrutą,<br/>
                        Że tak powiemy, od smutku radością,<br/>
                        Z pogodą w jednym, a łzą w drugim oku,<br/>
                        Z bukietem w ręku, a jękiem na ustach,<br/>
                        Na równi ważąc wesele i boleść —<br/>
                        Połączyliśmy się małżeńskim węzłem<br/>
                        Z tą niegdyś siostrą naszą, a następnie<br/>
                        Dziedziczką tego wojennego państwa. .<p></p>`
    },
    {
        id: "karenina",
        title: "Anna Karenina",
        author: "",
        text: `<p></p>Wszystkie szczęśliwe rodziny podobne są do siebie, każda zaś nieszczęśliwa jest nieszczęśliwą po swojemu.W domu Obłońskich zapanował nieład. Żona dowiedziała się o stosunkach męża z guwernantką francuską i powiedziała mu, że nie może mieszkać z nim dłużej. Stan ten, trwający już trzeci dzień, dawał się we znaki i samym małżonkom i wszystkim członkom rodziny i domownikom, gdyż wszyscy widzieli, że wspólne ich mieszkanie niema przed sobą żadnego celu i że ludzie, którzy przypadkowo zeszli się w pierwszym lepszym zajeździe, więcej mają z sobą wspólnego, niż oni, członkowie rodziny i domownicy Obłońskich. Żona nie wychodziła ze swego pokoju, mąż od trzech dni nie był już w domu. Dzieci biegały po całem mieszkaniu; angielka pokłóciła się z szafarką i napisała do swej przyjaciółki, prosząc ją o znalezienie jej nowego miejsca; kucharz odszedł jeszcze poprzedniego dnia w czasie obiadu; pomywaczka i stangret również chcieli porzucić służbę.<p></p>`
    },
    {
        id: "kameliowa",
        title: "Dama Kameliowa",
        author: "",
        text: `<p></p>Jestem umierająca, ale jestem szczęśliwa i szczęście moje przesłania moją śmierć. Więc jesteście po ślubie! Cóż za dziwna rzecz to pierwsze życie, a czym będzie następne?… Będziecie jeszcze szczęśliwsi niż wprzódy. Mówcie o mnie czasami, dobrze? Armandzie, daj mi rękę… Upewniam cię, że to nie jest trudno umierać. A, to Gaston przyszedł po mnie… Cieszę się, że cię widzę jeszcze, mój drogi Gastonie. Szczęście jest niewdzięczne: zapomniałam o tobie… Bardzo był dobry dla mnie… Och! to dziwne.<p></p>`
    },
    {
        id: "boskakomedia",
        title: "Boska Komedia",
        author: "",
        text: `<p></p>Z prostego toru w naszych dni połowie <br/>
                Wszedłem w las ciemny; jaka gęstwa dzika,<br/>
                Jakie w tym lesie okropne pustkowie,<br/>
                Żyjący język tego nie wypowie;<br/>
                Wspomnienie gorzkie i zgrozą przenika,<br/>
                Śmierć odeń gorzką nie więcej być może.<br/>
                Lecz o pomocach mówiąc dobroczynnych,<br/>
                Jakie spotkałem, zszedłszy w to rozdroże,<br/>
                Powiem, com widział, wiele rzeczy innych.<br/>
                Jak w ten las wszedłem, przypomnieć nie mogę.<br/>
                Senny, prawdziwą opuściłem drogę.<br/>
                Ledwo mnie dzika przywiodła drożyna<br/>
                Pod górę, gdzie się kończyła dolina,<br/>
                W której mi serce zakrzepło od trwogi.<p></p>`
    },
    {
        id: "romeoijulia",
        title: "Romeo i Julia",
        author: "",
        text: `<p></p>Dowiedz się zatem, że anioł kobieta,<br/>
                Którąm ukochał, jest z krwi Kapuleta.<br/>
                Jego to dziecko i nadzieja cała;<br/>
                Jak ja ją, tak mnie ona ukochała.<br/>
                I do jedności, która nas już splata,<br/>
                Brakuje tylko, byś nas ty dla świata<br/>
                Stułą zjednoczył. Gdzie, o jakiej dobie<br/>
                Dozgonną miłość przysięgliśmy sobie,<br/>
                Powiem ci idąc, czcigodny kapłanie;<br/>
                Błagam cię tylko, niech się to dziś stanie. <p></p>`
    },
    {
        id: "straconezludzenia",
        title: "Stracone Złudzenia",
        author: "",
        text: `<p></p>Zimna krew pani de Bargeton położyła koniec biadaniom noblesy. Wielkie dusze są zawsze skłonne podnieść nieszczęście do wyżyn cnoty. Przy tym wytrwałość w dobrym uczynku spotykającym się z potępieniem przedstawia niewysłowione uroki: rzecz w sobie niewinna nabiera powabów występku. Tego wieczora salon pani de Bargeton napełnił się przyjaciółmi, którzy przybyli, aby przemawiać jej do zastanowienia. Rozwinęła całą ciętość swego dowcipu: rzekła, iż skoro stan szlachecki nie jest zdolny wydać ani Moliera, ani Racine'a, ani Woltera, ani Massilona, ani Beaumarchais'go, ani Diderota, trzeba pogodzić się z istnieniem tapicerów, zegarmistrzów, nożowników, których synowie stają się wielkimi ludźmi.<p></p>`
    }, 
    {
        id: "spadek",
        title: "Spadek",
        author: "",
        text: `<p></p>Mimo że nie było jeszcze godziny dziesiątej, urzędnicy napływali tłumnie pod główną
            bramę Ministerstwa Marynarki, przybywając w pośpiechu ze wszystkich zakątków Paryża,
            zbliżał się bowiem Nowy Rok, czas gorliwości i awansów. Dudnienie szybkich kroków
            napełniało rozległy budynek, zawiły na kształt labiryntu i pocięty krętymi korytarzami, skąd
            niezliczone wejścia prowadziły do biur.
            Każdy wchodził do swej komórki, ściskał dłoń wcześniej przybyłego kolegi, zdejmował
            surdut, wkładał stare ubranie robocze i zasiadał przed swym biurkiem, gdzie oczekiwały nań
            stłoczone papiery. Później udawano się po nowiny do sąsiednich wydziałów. Dowiadywano
            się przede wszystkim, czy naczelnik już przybył, czy ma dobry humor i czy poczta jest dziś
            obfita.<p></p>`
    }, 
    {
        id: "lordjim",
        title: "Lord Jim",
        author: "",
        text: `<p></p>Mnie trzymała na miejscu siła nietajemnicza: ciekawość jest najsilniejszym uczuciem i to ona nie dawała mi odejść; chciałem zobaczyć, jakie wrażenie wywoła to wszystko na młodym chłopcu, który stał z rękami w kieszeniach, odwrócony plecami i patrzył poprzez gazony esplanady na żółty portyk hotelu Malabar, z miną człowieka wybierającego się na spacer, gdy tylko przyjaciel jego będzie gotów. Taką miał minę i było to wstrętne. Czekałem, by go ujrzeć zgnębionego, zmieszanego, przeszytego na wskroś, wijącego się jak ćma na szpilce, a zarazem bałem się to zobaczyć, jeżeli rozumiecie moją myśl. Nic okropniejszego, niż patrzeć na człowieka, który był schwytany nie na zbrodni, ale na gorszej niż zbrodnia słabości.<p></p>`
    }, 
    {
        id: "wichrowewzgorza",
        title: "Wichrowe Wzgórza",
        author: "",
        text: `<p></p>We śnie tym zdawałem sobie sprawę z tego, że leżę w dębowym łożu, i słyszałem wyraźnie wycie wichru i szum zawiei. Słyszałem równieżmęczący, jednostajny odgłos gałęzi ocierającej się o szybę i wiedziałem, że to gałąź, lecz dźwięk ten tak mi działał na nerwy, że postanowiłem w jakiś sposób zrobić z tym porządek. Zdawało mi się, że wstałem, aby otworzyć okno. Hak był wlutowany w skobel, co zauważyłem na jawie, a o czym we śnie nie zapomniałem. - Jednakże muszę z tym zrobić porządek - mruczałem uderzając pięścią w szybę i sięgając po natrętną gałąź. Ale zamiast gałęzi palce moje pochwyciły paluszki drobnej, lodowato zimnej dłoni.<p></p>`
    }, 
    {
        id: "otello",
        title: "Otello",
        author: "",
        text: `<p></p>Gardź mną, jeżeli nie mówiłem prawdy.<br/>
                Prosili za mną trzej senatorowie,<br/>
                Żeby mnie swoim zrobił porucznikiem,<br/>
                Chodzili za mną, czapkowali przed nim;<br/>
                Znam moją cenę; wiem, żem godzien stopnia;<br/>
                Lecz on w swych własnych zakochany planach,<br/>
                Ciągle ich łudził brzmiącymi słowami,<br/>
                Epitetami wojny nadzianymi,<br/>
                A w końcu, z kwitkiem odprawił proszących.<br/>
                „Prawdziwie, rzekł im, mam już porucznika”.<br/>
                Któż on? Zaiste, wielki matematyk,<br/>
                Jakiś Florentczyk, jakiś Michał Kassjo,<br/>
                Co nie jak żołnierz, ale żył jak panna,<br/>
                Co nigdy w polu nie rozwijał kolumn,<br/>
                A na manewrach tak zna się jak szwaczka.<p></p>`
    }, 
    {
        id: "odyseja",
        title: "Odyseja",
        author: "",
        text: `<p></p>Gdy z obczyzny mu wraca po latach dziesięciu<br/>
                Jedynaczek, co tyle trosek go kosztował.<br/>
                Tak samo Telemacha ściskał i całował<br/>
                Wierny pastuch, jak gdyby nieboszczyka witał,<br/>
                I łkając, tymi słowy lotnymi go pytał:<br/>
                „Tyżeś to, światło moje, Telemachu miły?!<br/>
                Gdyś odjeżdżał do Pylos, oczy me zwątpiły,<br/>
                Czy cię kiedy już ujrzą. Pójdźże tu, kochanku,<br/>
                Przyjrzę ci się, nacieszę, patrząc bez ustanku<br/>
                W ciebie, wracającego z dalekiej żeglugi.<br/>
                Tyś tak rzadko nawiedzał twe trzody i sługi,<br/>
                Siedząc w mieście! Zapewne siedziałeś tam gwoli <br/>
                Onych gachów zbytników, świadek ich swawoli?”<p></p>`
    }, 
    {
        id: "giaur",
        title: "Giaur",
        author: "",
        text: `<p></p>Wyspy szczęśliwe! w każdej porze roku<br/>
                Zarówno miłe i sercu i oku,<br/>
                Gdy was przychodzień z gór Kolonny wita,<br/>
                Wraz nagły urok źrenice mu chwyta,<br/>
                I myśl pogrąża w dumy tajemnicze.<br/>
                Tu szklane morza cichego oblicze<br/>
                Na falach drobnych jak uśmiechu dołki,<br/>
                Gór okolicznych odbija wierzchołki<br/>
                Strzegące brzegów, z którymi łagodnie<br/>
                Zdają się igrać rajskie wody wschodnie.<br/>
                Jeśli się wietrzyk chwilowy prześliźnie,<br/>
                I złamie szyby na modrej płaszczyźnie,<br/>
                I kwiecie z brzegu przyniesione miota,<br/>
                Jakaż w tym wietrze wonia i pieszczota! <p></p>`
    }, 
    {
        id: "dziejegrzechu",
        title: "Dzieje Grzechu",
        author: "",
        text: `<p></p>W czasie powrotu do domu Ewa miała oczy spuszczone. Wszystkimi siłami starała się nie patrzeć na przechodniów i unikać ich wzroku. Wiedziała przecie, że każdy przechodzący mężczyzna… Chciała widzieć i spod powiek widziała jedynie wyślizganą szarzyznę betonowego chodnika, chropowatą równię środka ulicy z jej dołami i zbitym brukiem drewnianym, nagość bezbarwną drzewek ujętych w żelazne pręty ogrodzeń. Barwy te były podobne do jej myśli i odpowiadały potrzebie duszy. Dbała o to, żeby myśli były właśnie takie, pozbawione piękności, jak gdyby odbarwione ze wszelkiego uroku. Była bowiem szczególna wzniosłość i nieznany powab w tym dobrowolnym i pilnym wyzbyciu się wesela.<p></p>`
    }, 
    {
        id: "nedznicy",
        title: "Nędznicy",
        author: "",
        text: `<p></p>Dwie dziewczynki dość ładnie i z pewnem wyszukaniem odziane, jaśniały zdrowiem: rzekłbyś dwie róże wśród żelaztwa; oczy błyszczały szczęściem, świeże jagody się śmiały; jedna szatynka druga brunetka. Krzak niedaleko kwitnący słał przechodniom woń, zdającą się od nich wychodzić; półtoraroczna pokazywała obnażony brzuszek z niewinną nieprzyzwoitością drobnych dziatek. Ponad szczęśliwemi główkami i dokoła olbrzymi przód wozu, poczerniały od rdzy, straszny prawie, pełen brzydkich zgięć i kantów, tworzył jakby sklepienie pieczary. O kilka kroków siedziała na progu oberży matka, kobieta niebardzo powabna; ale w tej chwili miły przedstawiała obraz, huśtając dwoje dzieci z pomocą długiego sznurka, i z obawy jakiego przypadku, nieustannie mając wlepione w nie oczy, z tym wyrazem zwierzęcym, i niebieskim razem, który jest tylko matkom właściwy;<p></p>`
    }, 
    {
        id: "przeminelo",
        title: "Przeminęło z wiatrem",
        author: "",
        text: `<p></p>Scarlett O’Hara nie była piękna, ale mężczyźni, zadurzeni w niej tak jak dwaj młodzi Tarletonowie, rzadko zdawali sobie z tego sprawę. W twarzy jej zbyt ostro odcinały się delikatne, arystokratyczne, po matce Francuzce odziedziczone cechy, od grubych rysów, odziedziczonych po rumianym ojcu Irlandczyku. Twarz ta jednak, o mocnych szczękach i spiczastym podbródku, przykuwała do siebie uwagę. Oczy miała Scarlett jasnozielone, w oprawie czarnych, sztywnych, ku górze odwiniętych rzęs. Jej szerokie czarne brwi były nieco skośne i przecinały śmiałą, łamaną linią jej śnieżnobiałą skórę - skórę, która stanowiła przedmiot podziwu kobiet Południa i którą Scarlett troskliwie osłaniała czepeczkami, woalkami i mitenkami przed gorącym słońcem Georgii.<p></p>`
    },
    {
        id: "cristo",
        title: "Hrabia Monte Christo",
        author: "",
        text: `<p></p>A statek zbliżał się tymczasem; przebył już szczęśliwie cieśninę pomiędzy wyspami Calasareigne i Jaros, powstałą na skutek wstrząsów wulkanicznych, minął Pomègue, i choć posuwał się pod rozpiętymi marslami, kliwrem i bezanem, szedł tak wolno i tak posępny nastrój wokół roztaczał, że niektórzy wśród widzów, wiedzeni samym przeczuciem, zastanawiali się, co za nieszczęście mogło ów statek dotknąć. Mimo to ludzie rozumiejący się na nawigacji twierdzili, że jeśli się coś złego przytrafiło, to pewnie nie statkowi. Bo chociaż płynął wolno, ale w najlepszym porządku, jak statek pod znakomitym dowództwem.<p></p>`
    },    
    {
        id: "dusze",
        title: "Martwe dusze",
        author: "",
        text: `<p></p>Twarze ich były pełne i okrągłe, niektórzy mieli brodawki, ten i ów był nawet dziobaty, włosów na głowie nie czesali ani w czub, ani w pukle, ani na sposób „niech mnie diabli wezmą”, jak mówią Francuzi; włosy mieli albo krótko podstrzyżone, albo przylizane, a rysy twarzy bardziej
        zaokrąglone i mocne. Byli to najszanowniejsi urzędnicy w mieście. Niestety! tłuści lepiej umieją na
        tym świecie dbać o swoje sprawy niż chudzi. Chudzi są raczej urzędnikami do specjalnych
        poruczeń albo tylko figurują na liście i wałęsają się tu i tam: ich egzystencja jest jakoś nazbyt
        lekka, eteryczna i zupełnie niepewna.<p></p>`
    },   
    {
        id: "noce",
        title: "Białe noce",
        author: "",
        text: `<p></p>Teraz niedługo koniec. Akurat rok temu, w maju, przychodzi do nas lokator i mówi babci, że
            załatwił tu już zupełnie swoje sprawy i że musi
            znowu jechać na rok do Moskwy. Kiedym to usłyszała, pobladłam i upadłam na krzesło jak nieżywa. Babcia nic nie zauważyła, a on, oświadczywszy, że wyjeżdża, ukłonił się i wyszedł.
            Cóż miałam robić? Myślałam i myślałam, martwiłam się i martwiłam, no i wreszcie zdecydowałam się. Następnego dnia miał wyjechać, a ja
            postanowiłam, że wszystko skończę wieczorem.<p></p>`
    },  
    {
        id: "wojnaipokoj",
        title: "Wojna i Pokój",
        author: "",
        text: `<p></p>Nudziło mi się bez pana – oznajmiła uśmiechając się do niego tkliwie.
            Młody człowiek, któremu to pochlebiło, z kokieteryjnym uśmiechem młodości przysiadł
            się bliżej do uśmiechniętej Julie i zaczął z nią osobną rozmowę, nie dostrzegając zupełnie, iż
            ten jego mimowolny uśmiech nożem zazdrości kraje serce zaczerwienionej i sztucznie uśmiechającej się Soni. W czasie rozmowy spojrzał na nią. Sonia popatrzyła na niego namiętnie,
            gniewnie i, z trudem powstrzymując łzy w oczach, ze sztucznym uśmiechem na ustach wstała
            i wyszła z pokoju.<p></p>`
    }, 
    {
        id: "upadek",
        title: "Upadek",
        author: "",
        text: `<p></p>Czy mogę zaproponować panu swoje usługi, jeśli nie wyda się to
                panu natręctwem? Obawiam się, że szacowny goryl, który czuwa nad
                losami tego lokalu, nie rozumie pana. Mówi tylko po holendersku. Jeśli
                nie pozwoli mi pan wystąpić w pańskiej sprawie, nie odgadnie, że
                chciałby pan jałowcówki. Proszę, ośmielam się sądzić, że mnie
                zrozumiał; to skinięcie głową powinno oznaczać, że poddaje się moim
                argumentom. Już idzie, spieszy się z rozumną powolnością. Ma pan
                szczęście, nie chrząknął. Gdy nie chce podawać, wystarczy mu
                chrząknięcie: nikt nie nalega. Być królem swych humorów to przywilej
                wielkich zwierząt. Ale teraz się wycofam, szczęśliwy, żem się panu
                przydał. Dziękuję, zgodziłbym się chętnie, gdybym był pewien, że się
                panu nie naprzykrzam. Pan jest zbyt dobry. Postawię więc mój kieliszek
                obok pańskiego.<p></p>`
    }, 
    {
        id: "piesni",
        title: "Pieśni",
        author: "",
        text: `<p></p>Gdy próg domu przestępujesz,<br/>
                to tak jakby noc sierpniowa<br/>
                zaszumiała wśród listowia,<br/>
             a ty przodem postępujesz.<br/>
            <br/>
                A za tobą cienie ptasie<br/>
                szczygieł, gil i inne ptaki.<br/>
                ćwiecisz światłem wielorakim<br/>
                od sierpniowej nocy jaśniej.<br/>
                <br/>
                Bo ty jesteś ornamentem<br/>
                w gmachu nocy, jej księżycem.<br/>
                Przesypujesz światła w ręku<br/>
                z namaszczeniem, jak pszenicę.<br/>
                <br/>
                U twych ramion płaszcz powisa<br/>
                krzykliwy, z leśnego ptactwa,<br/>
                długi przez cały korytarz,<br/>
                przez podwórze, aż gdzie gwiazda<br/>
                    <br/>
                Venus. A tyś lot i górność<br/>
                chmur, blask wody i kamienia.<br/>
                Chciałbym oczu twoich chmurność<br/>
                ocalić od zapomnienia.<p></p>`
    }, 
    {
        id: "goriot",
        title: "Ojciec Goriot",
        author: "",
        text: `<p></p>Nazajutrz, około trzeciej po południu, Rastignac ubrany bardzo wykwintnie poszedł do pani de Restaud. W drodze oddał się cały owej nadziei lekkomyślnej, która tysiącem wzruszeń barwi młode życie. Młodzież nie rachuje przeszkód i niebezpieczeństw; gra bujnej wyobraźni idealizuje życie w ich oczach i widzą przed sobą same powodzenia; zburzenie planów, które utworzyła żądza wybujała pogrąża ich w smutku, niekiedy nawet czyni nieszczęśliwymi; gdyby byli odważniejsi i mniej nieświadomi, to budowa społeczna nie mogłaby się przy nich ostać. Eugeniusz wystrzegał się jak mógł, żeby się nie zabłocić, a obok tego układał w myśli, co powie pani de Restaud, przysposabiał zapas dowcipu, wymyślał odpowiedzi stosowne do przypuszczalnej rozmowy, przygotowywał słówka dowcipne, zdania á la Talleyrand i przypuszczał tysiączne okoliczności mogące mu ułatwić wynurzenie uczuć, na którym opierał całą swą przyszłość.<p></p>`
    }, 
    {
        id: "sonet",
        title: "Sonet 104",
        author: "",
        text: `<p></p> Nie ze mną pokój, choć nie dla mnie boje —<br/>
                    Rzeźwieję, wątpię, płonę, chłodnę, kwilę —<br/>
                    To w niebo lecę, to lgnę w ziemskim pyle —<br/>
                    Świat cały garnąc, sam jak w pustce stoję.<br/>
                    Anim pod kluczem, ni mi wszerz podwoje —<br/>
                    Ni mię przy sobie trzyma, ni choć tyle<br/>
                    Puszcza, bym wolnym był, lub legł w mogile —<br/>
                    Ni dba o śmierć mą, ni o życie moje.<br/>
                    Wbrew oczom patrzę, wołam próżen mowy —<br/>
                    Sam zginąć pragnąc, o ratunek proszę —<br/>
                    Niecierpiąc własnej, kocham inną duszę —<br/>
                    Przez łzy się śmiejąc, w mierze jednakowej,<br/>
                    Życia, jak śmierci, wstrętne mi rozkosze —<br/>
                    I takim Pani! z woli twej być muszę! —<p></p>`
    }, 
    {
        id: "dzwon",
        title: "Komu bije dzwon",
        author: "",
        text: `<p></p>Leżał płasko na pokrytym igliwiem brązowym podłożu lasu,
        brodę trzymał na skrzyżowanych ramionach, a wysoko nad
        nim w czubkach sosen wiał wiatr. Tu, gdzie leżał, zbocze opadało łagodnie; niżej jednak było strome, widział więc ciemne
        pasmo utwardzonej szosy wijącej się przez przełęcz. Wzdłuż
        tej szosy biegł strumień, a w głębi przełęczy nad strumieniem
        widać było tartak i wodę spadającą z tamy, białą w blasku letniego słońca.<p></p>`
    }, 
    {
        id: "pozegnanie",
        title: "Pożegnanie z bronią",
        author: "",
        text: `<p></p>U schyłku tamtego lata mieszkaliśmy w domu we wsi z widokiem na rzekę i równinę, i góry w oddali. W korycie rzeki
            bielały wysuszone słońcem kamyki i głazy, a woda płynęła strumieniami, wartka i błękitna. Obok domu szły wojska, wzbijany przez nie pył oprószał liście drzew. Pnie też pokrywał
            pył, liście spadły wcześnie tego roku i widzieliśmy przemarsz
            wojsk i tumany pyłu, i drżące na wietrze, spadające liście, maszerujących żołnierzy, a potem pustą drogę, pobielałą, zasłaną
            tylko liśćmi.<p></p>`
    }, 
]