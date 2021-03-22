/**
 * Tämän esimerkin tarkoituksena on havainnollistaa funktionaalista ohjelmointityyliä
 * ja vertailukohtaa olio-ohjelmoinnin vastaavaan toteutukseen.
 * Vrt. Listaesimerkki.java
 * */
const laskeEsiintymat = (lista, uniikkiAvainFunktio) => {
    const esiintymaMap = {}
    if (lista.length < 1) {
        return esiintymaMap
    }
    esiintymaMap[uniikkiAvainFunktio(lista[0])] = 1
    return laskeEsiintymatInternal(esiintymaMap, lista.slice(1), uniikkiAvainFunktio)
}

const laskeEsiintymatInternal = (map, loppuLista, uniikkiAvainFunktio) => {
    if (loppuLista.length < 1) {
        return map
    }

    const avain = uniikkiAvainFunktio(loppuLista[0])
    let uusiArvoAvaimelle = 1

    if (map[avain]) {
        uusiArvoAvaimelle = map[avain] + 1
    }

    return laskeEsiintymatInternal({ ...map, [avain]: uusiArvoAvaimelle }, loppuLista.slice(1),
        uniikkiAvainFunktio)
}

const numeroLista = [1, 2, 3, 1];
console.log(laskeEsiintymat(numeroLista, (a) => a))

const stringLista = ["Pekka", "Maija", "Elina", "Pekka"];
console.log(laskeEsiintymat(stringLista, (a) => a))

const autoLista = [{ id: 1, merkki: "Volvo" },
{ id: 2, merkki: "Mersu" }, { id: 3, merkki: "BMW" }, { id: 4, merkki: "Volvo" }];
console.log(laskeEsiintymat(autoLista, (a) => a.merkki))


