---

title: Robustes Mechanismusdesign für den Smart Equipment RWA-Markt

date: 2024-11-11

published: true

locale: 'de'

tags: ['Ankündigungen']

cover_image: ../images/ohf-part-1/cover.webp

description: "Die Finanzierung des sich rasant entwickelnden Marktes für intelligente Geräte birgt erhebliche Herausforderungen. Dieser Artikel schlägt eine Lösung vor, die digitale Zwillinge für die Echtzeitüberwachung, Prognosemärkte für eine effiziente Kapitalallokation und Risikoteilungsverträge kombiniert, die alle von einem transparenten DAO-Modell geleitet werden, um optimale Entscheidungsfindung in dieser transformierenden Branche zu ermöglichen."

---

Die jüngsten Fortschritte im maschinellen Lernen (ML) haben einen massiven Zustrom von Möglichkeiten für die Robotik eröffnet, um neue Aufgaben in der realen Welt zu automatisieren. Während die industrielle Robotik nach wie vor das dominierende Segment nach Größe ist, haben Service-Roboter - die unter Menschen operieren - das schnellste Wachstum verzeichnet. Der geschätzte Wert des Marktes für professionelle Service-Robotik betrug **21,6 Milliarden US-Dollar im Jahr 2023** mit einer jährlichen Wachstumsrate von 38 %. Durchbrüche im ML und der wachsende Arbeitskräftemangel haben einen einzigartigen Moment geschaffen, in dem die Service-Robotik endlich für eine weitreichende Implementierung bereit ist, um kritische Bedürfnisse in verschiedenen Branchen und in unserem täglichen Leben zu adressieren.

"Kleine und mittlere Unternehmen (KMU) benötigen einen einfachen Zugang zur Automatisierung" und "Demokratisierung" der Robotik sind derzeit die wichtigsten Trends in der Robotik, [laut IFR](https://ifr.org/img/worldrobotics/Press_Conference_2024.pdf). Logistik- und Lagerroboter habenführend in diesem Trend. Die ersten Einsätze von Stadtlieferrobotern haben begonnen und es ist klar, dass die Routenoptimierung entscheidend ist, um die Margen zu halten. Die medizinische Robotik hat während der Pandemie einen enormen Aufschwung erlebt und ist seitdem auch eine der führenden Kategorien, wobei Desinfektion und Sterilisation die dominanten Anwendungsfälle sind. Gastroboter in Hotels und Restaurants haben bereits einen großen Anstieg in asiatischen Märkten verzeichnet und wir sehen sie nun vermehrt in Europa und den USA. Landwirtschaft, professionelle Reinigung, Inspektionen und Wartung, Bauwesen und Schwerindustrie, Sicherheit/Suche und Rettung - die Liste der neuen Anwendungsbereiche wächst ständig. Einige der optimistischsten Prognosen besagen, dass wir in den nächsten zehn Jahren möglicherweise mehr humanoide Roboter als Menschen haben werden.

Hier ist die Liste der Top-5 Anwendungsbereiche für professionelle Servicerobotik im Jahr 2023, laut der International Federation of Robotics:

![card-1.png](../images/ohf-part-1/card-1.png)

Allerdings hinken herkömmliche Finanzierungsansätze bei der Bewältigung der einzigartigen Herausforderungen, die durch das Leasing von intelligenten Geräten und Investitionen in Robotik entstehen, hinterher, während diese Technologien sich weiterentwickeln.

**Traditionelle Modelle**, wie Kredite oder Leasing, sind oft **nicht ausreichend für intelligente Geräte**, aufgrund schneller technologischer Überholung, Informationsasymmetrie und Leistungsunsicherheit. Robotik- und KI-Technologien entwickeln sich schnell, was langfristige Investitionen riskant macht, da herkömmliche Modelle die häufig erforderlichen Upgrades oder Umrüstungen nicht berücksichtigen. Hersteller haben oft mehr Wissen über die Leistung der Geräte als Leasingnehmer, was zu Ineffizienzen bei der Kapitalallokation führt oderFehlbewertung. Darüber hinaus spiegeln feste Zahlungspläne nicht den realen Wert der Ausrüstung wider, insbesondere wenn die Leistung von Software-Updates oder Integration abhängt. Der Mangel an Fachwissen bei Finanzinstituten im Umgang mit KI-gesteuerten Vermögenswerten trägt weiterhin zur Unterinvestition in diese hochpotenziellen Technologien bei.

Ein besseres Kapitalallokationssystem ist für intelligente, vernetzte Ausrüstung erforderlich. Eines, das auf das viel schnellere Innovations­tempo reagiert und gegen Unsicherheiten und asymmetrische Informationen, die von verschiedenen Marktteilnehmern gehalten werden, widerstandsfähig ist.



## Prinzipien des robusten Mechanismusdesigns

Mechanismusdesign ist ein **Bereich in der Wirtschaft und Spieltheorie**, der sich darauf konzentriert, Regeln oder Systeme (Mechanismen) zu entwerfen, um bestimmte Ziele zu erreichen, selbst wenn die Teilnehmer über private Informationen verfügen und strategisch handeln oder kollaborieren können. Ein klassisches Beispiel ist die Gestaltung von Auktionen, bei denen Bieter private Bewertungen der versteigerten Waren haben.

Eine zentrale Herausforderung beim robusten Mechanismusdesign besteht darin, **Typenräume** zu handhaben - alle möglichen Merkmale von Agenten, wie ihre Vorlieben und Überzeugungen. Da wir nicht alle möglichen Typenräume berücksichtigen können, müssen Mechanismen so gestaltet sein, dass sie mit verschiedenen Situationen umgehen können, in denen Agenten möglicherweise nicht vollständig über die Vorlieben oder Überzeugungen der anderen Bescheid wissen.

Es gibt viele **verschiedene Akteure**, die direkt an einem Ausrüstungsgeschäft beteiligt sein können, wie **Ausrüstungshersteller (OEMs)**, **Integratoren und Wartungsanbieter**, **Vermögensursprünge**, **Versicherer** und **Investoren**. Die Koordination zwischen ihnen birgt erhebliche Transaktionskosten, ganz zu schweigen von den zusätzlichen Komplexitäten bei der Berücksichtigung breiterer öffentlicher Interessen. Trotz der Komplexität dieserInteraktionen haben wir das Ziel, einen robusten Mechanismus zu entwickeln, der:

- **Sichert Anreizkompatibilität** für alle Marktteilnehmer
- **Allokiert Kapital zur Erreichung von Ex-post-Effizienz**
- **Bleibt widerstandsfähig gegen Unsicherheiten** in Marktbedingungen und den Überzeugungen der Teilnehmer.

Lassen Sie mich dies anhand eines einfachen Beispiels veranschaulichen, um es leichter verständlich zu machen:

**Anreizkompatibilität**: Stellen Sie sich vor, Sie spielen ein Spiel, bei dem Sie angeben müssen, wie sehr Sie verschiedene Süßigkeiten mögen. Wenn Sie die Wahrheit sagen, erhalten Sie Ihre Lieblingssüßigkeit. Anreizkompatibilität bedeutet, dass Ihre beste Option darin besteht, ehrlich zu sein, denn auf diese Weise erhalten Sie das, was Sie wirklich wollen. Mit anderen Worten, die Wahrheit zu sagen ist der klügste Schachzug.

**Ex-post-Effizienz**: Nachdem alle ihre Favoriten geteilt haben, werden die Süßigkeiten verteilt. Ex-post-Effizienz bedeutet, dass jeder die Süßigkeit bekommt, die er am liebsten mag, und keine Süßigkeit verschwendet wird oder an jemanden gegeben wird, der sie nicht mag. Es stellt sicher, dass jeder seine Lieblingssüßigkeit bekommt und alle so glücklich wie möglich mit dem sind, was sie erhalten.

Ich glaube, es ist wichtig, anreizkompatible Mechanismen zu verwenden, wenn wichtige neue Technologien wie Robotik und verkörperte KI eingeführt werden, die das Potenzial haben, das Gefüge der Gesellschaft grundlegend zu verändern. Die Sicherstellung, dass diese Mechanismen robust sind, ist entscheidend für die Maximierung des gesellschaftlichen Nutzens und die Erzielung fairer, effizienter Ergebnisse bei der Einführung transformatorischer Technologien.



## Design des Real-World Asset (RWA) Marktes für intelligente Geräte

Entwicklung eines robustenDer Mechanismus zur Kapitalallokation in neue Kategorien von intelligenten Geräten ist aufgrund der Komplexität und der sich ständig weiterentwickelnden Natur des Feldes unglaublich herausfordernd. Dennoch sehe ich eine Möglichkeit für mehrere Strategien, um die Robustheit dieses Mechanismus zu verbessern.


### **Digitale Zwillinge und mehr**

Dies steht im Mittelpunkt dessen, was Robonomics tut. In dem Artikel ["Einführung in digitale Zwillinge"](https://robonomics.network/blog/digital-twins-introduction/) haben wir das Konzept erklärt - digitale Darstellungen physischer Entitäten oder Prozesse. Digitale Zwillinge sind keine statischen Modelle, sondern dynamische Systeme, die kontinuierlich Echtzeitdaten von ihren physischen Gegenstücken erhalten und so fortlaufende Aktualisierungen und genaue Abbildungen des aktuellen Zustands ermöglichen. Dieser kontinuierliche Datenfluss ermöglicht präzise Simulationen und Analysen, die informierte Entscheidungen bezüglich des Betriebs, der Wartung und der Optimierung physischer Vermögenswerte erleichtern.

Um Daten von intelligenten Geräten effektiv zu erfassen und zu verwalten, bietet Robonomics ein Open-Source-Tool namens [Otaberu](https://robonomics.network/blog/otaberu-part-1/) an. Otaberu ist darauf ausgelegt, Peer-to-Peer (P2P)-Netzwerke für Edge-Geräte und Robotik zu erleichtern, um eine nahtlose und sichere Kommunikation zwischen Geräten ohne umfangreiche Netzwerkkonfiguration zu ermöglichen. Es bietet einen robusten Rahmen für die Datensammlung und Verwaltung digitaler Zwillinge.

Digitale Zwillinge dienen als grundlegende Ebene für die Implementierung robuster Mechanismusdesigns zur Kapitalallokation auf intelligenten Gerätemärkten. Durch die Bereitstellung einer umfassenden und Echtzeit-Darstellung physischer Vermögenswerte ermöglichen digitale Zwillinge eine präzise Überwachung und Analyse der Leistung von Geräten, der Nutzungsmuster und der Wartungsbedürfnisse. Diese detaillierten Einblicke ermöglichen esFür die Entwicklung anspruchsvoller Strategien zur Optimierung der Kapitalallokation, um sicherzustellen, dass Ressourcen effizient eingesetzt werden, um Renditen zu maximieren und die Langlebigkeit und Produktivität intelligenter Geräte zu verbessern.

Digitale Zwillinge im Kontext der Kapitalallokation eröffnen auch die Diskussion über autonome Robokorporationen, die von On-Chain-Governance-Mechanismen geleitet werden. Diese autonomen Entitäten können eigenständig Entscheidungen auf der Grundlage von Markteingaben treffen, was sie befähigt, Vermögenswerte zu verwalten, Ressourcen zuzuweisen und sogar wirtschaftliche Transaktionen ohne menschliches Eingreifen durchzuführen.

### **Vorhersagemärkte**

Vorhersagemärkte und robuste Mechanismenentwürfe zielen beide darauf ab, wahrheitsgemäße Informationen von Agenten mit privatem Wissen zu erhalten, um effiziente Ergebnisse zu erzielen. Durch die Integration von Vorhersagemärkten in unser Mechanismus-Framework können wir die Ex-post-Effizienz von Kapitalallokationsentscheidungen verbessern, indem sichergestellt wird, dass Entscheidungen die aktuellsten und genauesten verfügbaren Informationen widerspiegeln, was zu einer besseren Ausrichtung der Ressourcenallokation mit realisierten Ergebnissen führt.

Die folgenden Schritte veranschaulichen, wie der Prozess umgesetzt werden könnte:

- Einen Vorhersagemarkt für jede Kategorie von intelligenten Geräten, die in Betracht gezogen werden (Lieferrover, Verpackungsarme usw.), einrichten.
- Einer breiten Gruppe von Interessengruppen ermöglichen, Verträge auf der Grundlage zukünftiger Leistungskennzahlen der Geräte zu handeln, wie z.B. Betriebszeit und Wartungskosten.
- Den Marktpreis verwenden, um den kollektiven Glauben darüber widerzuspiegeln, ob das Gerät bestimmte Leistungsziele über den Mietzeitraum hinweg erreichen wird.
- Wenn der Vorhersagemarkt eine hohe Wahrscheinlichkeit anzeigt, dass das Gerät gut abschneiden wird (z.B. hohe Betriebszeit und niedrige Wartungskosten), mehr Kapital für die Anmietung dieses Geräts zuweisen.
- Wenn der Vorhersagemarkt hingegen auf eine schlechte Leistung hindeutet, die Kapitalallokation reduzieren oderPassen Sie die Mietbedingungen an, um potenzielle Verluste zu minimieren.
- Die Teilnehmer am Prognosemarkt werden belohnt oder bestraft, je nach den Wetten, die sie abschließen.

Prognosemärkte ermöglichen eine effiziente Aggregation privaten Wissens von verschiedenen Interessengruppen, Echtzeit-Updates zu Leistungserwartungen und kontinuierliche Anpassung an neue Informationen, was die Unsicherheit verringert und zu einem widerstandsfähigeren Mechanismusdesign führt.

Wenn neue Informationen verfügbar werden, wie z. B. ein aktualisiertes Digital Twin des intelligenten Equipments, passen sich die Preise auf dem Prognosemarkt entsprechend an, was eine dynamische Umschichtung von Kapital ermöglicht. Dies hilft, das Risiko einer Überinvestition in unterperformende Vermögenswerte zu mindern, während sichergestellt wird, dass leistungsstarke Vermögenswerte langfristig angemessene Finanzierung erhalten.

Durch die Ausrichtung der Kapitalallokation an kontinuierlich aktualisierten Markteinblicken können Underwriter fundiertere Entscheidungen treffen, ihre Portfolios optimieren und finanzielle Risiken reduzieren.


### **Risikoteilungsstrategien**

Risikoteilungsstrategien spielen eine entscheidende Rolle bei der Neugestaltung des Kapitalallokationsmechanismus für intelligentes Equipment und helfen, Risiken auszugleichen und die Anreizkompatibilität zu erhöhen. Traditionelle Leasingvereinbarungen sind relativ starr und verlassen sich in der Regel auf feste Zahlungen, ohne die dynamische Leistung des Equipments oder unerwartete Änderungen zu berücksichtigen.

Strategien wie Versicherungsverträge oder leistungsabhängige Boni können eingesetzt werden, um einen flexibleren und anpassungsfähigeren Ansatz zu schaffen, der Risiken effektiv teilt und zu einem robusteren Mechanismusdesign führt.

Zum Beispiel kann ein Versicherungsvertrag dazu beitragen, das Risiko unvorhergesehener Ausfallzeiten zu verteilen: Wenn die Digital Twin-Daten unerwartete Ausfallzeiten aufgrund von Herstellerfehlern aufzeigen, könnte ein Teil der Zahlung zurückerstattet werden. Auf diese Weise wird die finanzielle Belastung durch Betriebsprobleme gemindert, und alle werden dazu incentiviert,Aufrechterhaltung der Leistung.

Das Pay-for-Outcomes-Modell bietet eine zusätzliche Risikoteilungsebene. Das Robots-as-a-Service (RAAS)-Modell gewinnt in der Robotik an Fahrt, wird jedoch von vielen traditionellen Ausrüstungsfinanzierern immer noch als neuartig angesehen. Indem Zahlungen an die geschäftlichen Vorteile geknüpft werden, die durch die Technologie generiert werden (wie die Anzahl der pro Tag bewegten Kisten oder die zurückgelegten Kilometer bei autonomen Lieferungen), werden die Teilnehmer dazu ermutigt, sich auf die Erreichung greifbarer Ergebnisse zu konzentrieren.

Wenn beispielsweise ein Logistikroboter die Effizienz im Lager um 20 % steigert, kann ein Teil dieses Effizienzgewinns zur Finanzierung der monatlichen Zahlung verwendet werden. Dieser Ansatz hilft Unternehmen, die Kosten für die Ausrüstung mit ihrem eigenen betrieblichen Erfolg zu verbinden, und verringert das finanzielle Risiko in unsicheren Zeiten, in denen Ergebnisse möglicherweise weniger vorhersehbar sind. Die Ausrichtung ist hier zweifach: Unternehmen fühlen sich sicherer, dass sie nur entsprechend dem Wert, den sie erhalten, zahlen, während Lieferanten dazu ermutigt werden, Ausrüstung bereitzustellen, die zuverlässig geschäftliche Vorteile bringt.

Mit intelligenter Ausrüstung, die Echtzeitdaten generieren kann, werden robuste Risikoteilungsmechanismen machbar, die dynamische Reaktionen auf Leistungsprobleme ermöglichen und Anreize rund um tatsächliche Ergebnisse ausrichten. Diese Entwicklung in den Leasingstrukturen ermöglicht es Marktteilnehmern, adaptiv auf technologische Veränderungen zu reagieren und sicherzustellen, dass die Risiken und Belohnungen der Einführung fortschrittlicher Ausrüstung gerechter geteilt werden. In der Praxis wird die Beziehung eher zu einer Partnerschaft als zu einer starren vertraglichen Vereinbarung, was Vertrauen fördert und Innovationen anregt.


### **DAO-Governance für die Herkunft und Bewertung von Ausrüstung**

Es ist entscheidend, Governance-Strukturen zu schaffen, die eine effiziente, anreizkompatible Kapitalallokation in den nächsten 3-5 Jahren unterstützen.Jahre, da sich die Robotikindustrie formt.

Eine dezentralisierte autonome Organisation (DAO) ist eine ideale Governance-Struktur zur Verwaltung des Underwriting-Prozesses bei Smart-Equipment-Deals. Ihr Hauptziel ist es, zu bestimmen, welche neuen Kategorien unterstützt werden sollen und wie Kapital effektiv allokiert werden kann.

Durch die Anwendung von Prinzipien des robusten Mechanismusdesigns können wir die Wahrscheinlichkeit erhöhen, dass Ressourcen in hochwertige Investitionsmöglichkeiten gelenkt werden, während Risiken im Zusammenhang mit asymmetrischen Informationen und Marktentwicklungen minimiert werden.

Das Underwriters DAO sollte auktionsbasierte Mechanismen nutzen, um fundierte Wetten auf vielversprechende Kategorien abzuschließen. Einblicke aus dem Prognosemarkt sollten die Genauigkeit der Bewertungen verbessern und hierbei die Bieterstrategien informieren. Ein autonomer Prozess kann dann Kapital optimal allozieren, basierend auf der einzigartigen Kombination von Überzeugungen der Mitglieder des Underwriters DAO.

Wenn das anfängliche Kapital im DAO gepoolt und allokiert wird, beginnt ein Rückkopplungsmechanismus auf der Grundlage von Digital Twin-Daten, um weitere Entscheidungen voranzutreiben. Zu diesem Zeitpunkt können eine größere Anzahl von Investoren über zusätzliche Tranchen teilnehmen und Hedge-Produkte anbieten, die durch Ausrüstung abgesichert sind, an digitale Vermögensinvestoren.

Die Fähigkeit zu entscheiden, welche Deals der größeren Gemeinschaft von gepoolten Investoren angeboten werden, ist entscheidend, und erfolgreiche Wetten sollten angemessen belohnt werden. Dies schafft den Wert, Teil der Governance des DAO zu sein, unabhängig von dem durch Kapital in Smart-Equipment investierten Vermögenswert.

Hier ist ein einfaches Betriebsmodell für ein solches DAO:

![card-2.png](../images/ohf-part-1/card-2.png)



## **Praktische Überlegungen und**Nächste Schritte**

Dies ist erst der Anfang. Mein Ziel ist es, einen robusten Mechanismus zur Kapitalallokation zu schaffen, der die Produktivitätsgewinne der Robotikrevolution für alle zugänglich macht.

Die oben genannten Ideen bieten einen guten Ausgangspunkt, aber es gibt Einschränkungen, die berücksichtigt werden müssen. Teilnehmer können immer noch strategisches Verhalten an den Tag legen, wenn sie glauben, dass sie Preise beeinflussen können, um persönliche Gewinne zu erzielen, und eine begrenzte Liquidität in den frühen Phasen kann dies noch einfacher machen. Mit ausreichender Liquidität in Vorhersage- und Kapitalmärkten kann dies überwunden werden, aber in den frühen Phasen ist es wichtig, die Mitglieder des Underwriters DAO sorgfältig auszuwählen.

**Schritte zur Einführung eines robusten Mechanismus zur Kapitalallokation in neuen Kategorien von intelligenten Geräten:**

1. Starten von Vorhersagemärkten zur Auswahl neuer Kategorien
2. Bildung des Underwriters DAO, um die ersten Deals abzuschließen
3. Verwendung von Risikoteilungsverträgen zur Verwaltung des Portfoliorisikos
4. Verwendung von Digital Twin-Daten zur weiteren Verbesserung der Allokation
5. Entwicklung einer Struktur für eine breitere Beteiligung von Investoren an den Produktivitätsgewinnen der Robotikrevolution

Wenn Sie daran interessiert sind, an dieser Reise teilzunehmen oder einfach nur ein paar Fragen stellen möchten - hinterlassen Sie unten Ihre E-Mail-Adresse.

*Vitaly, Evangelist von Robonomics*