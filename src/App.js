import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { token } from "./token";
import axios from "axios";
import styled from "styled-components";
import MatchPreviewCard from "./components/MatchPreviewCard";

const MatchCardsWrapper = styled.div`
  display: flex;
  /* align-items: stretch; */
  align-content: flex-start; // How to align all lines when there is extra space in container
  /* justify-content: space-around; // How to align items on individual line */
  flex-direction: row; // Specify direction that the flex items are displayed in
  flex-wrap: wrap;
  /* width: 10em; */
  /* height: 300px;
  background-color: rgb(200, 0, 0); */
`;

const ScreenHeader = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: 600;
  font-family: "Dosis";
  padding-top: 13px;
  padding-left: 13px;
  padding-bottom: 5px;
`;

const ChildItem = styled.div`
  height: 20em;
  width: 20em;
  margin: 10px;
  background: tomato;
`;

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    // const options = {
    //   method: "GET",
    //   url: "https://dev132-cricket-live-scores-v1.p.rapidapi.com/matches.php",
    //   params: { upcomingLimit: "2", inprogresslimit: "2", completedlimit: "2" },
    //   headers: {
    //     "x-rapidapi-key": token,
    //     "x-rapidapi-host": "dev132-cricket-live-scores-v1.p.rapidapi.com",
    //   },
    // };
    // const options = {
    //   method: "GET",
    //   url: "https://cricket-live-data.p.rapidapi.com/fixtures-by-date/2021-06-06",
    //   headers: {
    //     "x-rapidapi-key": token,
    //     "x-rapidapi-host": "cricket-live-data.p.rapidapi.com",
    //   },
    // };
    // axios
    //   .request(options)
    //   .then((res) => {
    //     // console.log(res);
    //     console.log(res.data.matchList.matches);
    //     setIsLoaded(true);
    //     // console.log(res.data.results);
    //     // setFixtures(res.data.results);
    //   })
    //   .catch((err) => console.error(err));
    setFixtures([
      {
        id: 49996,
        matchTypeId: 15,
        series: {
          id: 2739,
          name: "LV= Insurance County Championship 2021",
          shortName: "LV= Insurance County Championship 2021",
        },
        name: "",
        status: "LIVE",
        venue: {
          name: "Emerald Headingley",
          shortName: "Emerald Headingley",
        },
        homeTeam: {
          isBatting: false,
          id: 40,
          name: "Yorkshire",
          shortName: "YRK",
        },
        awayTeam: {
          isBatting: true,
          id: 39,
          name: "Sussex",
          shortName: "SUS",
        },
        currentMatchState: "Live",
        isMultiDay: true,
        matchSummaryText: "Live: SUS trail by 45 runs",
        scores: {
          homeScore: "558",
          homeOvers: "145.0",
          awayScore: "313 & 9-200",
          awayOvers: "115.3 & 109.5",
        },
        liveStreams: [],
        isLive: false,
        currentInningId: 3,
        isMatchDrawn: false,
        isMatchAbandoned: false,
        startDateTime: "2021-06-03T10:00:00Z",
        endDateTime: "2021-06-06T17:00:00Z",
        isWomensMatch: false,
        isGamedayEnabled: false,
        removeMatch: false,
      },
      {
        id: 49998,
        matchTypeId: 15,
        series: {
          id: 2739,
          name: "LV= Insurance County Championship 2021",
          shortName: "LV= Insurance County Championship 2021",
        },
        name: "",
        status: "LIVE",
        venue: {
          name: "The Cloudfm County Ground",
          shortName: "The Cloudfm County Ground",
        },
        homeTeam: {
          isBatting: true,
          id: 50,
          name: "Essex",
          shortName: "ESS",
        },
        awayTeam: {
          isBatting: false,
          id: 42,
          name: "Nottinghamshire",
          shortName: "NOT",
        },
        currentMatchState: "Live",
        isMultiDay: true,
        matchSummaryText: "Live: ESS trail by 150 runs",
        scores: {
          homeScore: "7-143",
          homeOvers: "60.3",
          awayScore: "293",
          awayOvers: "118.1",
        },
        liveStreams: [],
        isLive: false,
        currentInningId: 2,
        isMatchDrawn: false,
        isMatchAbandoned: false,
        startDateTime: "2021-06-03T10:00:00Z",
        endDateTime: "2021-06-06T17:00:00Z",
        isWomensMatch: false,
        isGamedayEnabled: false,
        removeMatch: false,
      },
      {
        id: 50239,
        matchTypeId: 15,
        series: {
          id: 2755,
          name: "England v New Zealand Test Series 2021",
          shortName: "England v New Zealand Test Series 2021",
        },
        name: "1st Test",
        status: "LIVE",
        venue: {
          name: "Lord's",
          shortName: "Lord's",
        },
        homeTeam: {
          isBatting: true,
          id: 2,
          name: "England",
          shortName: "ENG",
        },
        awayTeam: {
          isBatting: false,
          id: 4,
          name: "New Zealand",
          shortName: "NZ",
        },
        currentMatchState: "Live",
        isMultiDay: true,
        matchSummaryText: "Live: ENG trail by 137 runs",
        scores: {
          homeScore: "275 & 2-135",
          homeOvers: "101.1 & 55.2",
          awayScore: "378 & 6d-169",
          awayOvers: "122.4 & 52.3",
        },
        liveStreams: [],
        isLive: false,
        currentInningId: 4,
        isMatchDrawn: false,
        isMatchAbandoned: false,
        startDateTime: "2021-06-02T10:00:00Z",
        endDateTime: "2021-06-06T17:00:00Z",
        isWomensMatch: false,
        isGamedayEnabled: false,
        removeMatch: false,
      },
      {
        id: 50698,
        matchTypeId: 0,
        series: {
          id: 2770,
          name: "Rachael Heyhoe Flint Trophy 2021",
          shortName: "Rachael Heyhoe Flint Trophy 2021",
        },
        name: "",
        status: "COMPLETED",
        venue: {
          name: "Chester Boughton Hall CC",
          shortName: "Chester Boughton Hall CC",
        },
        homeTeam: {
          isBatting: true,
          id: 673,
          name: "Thunder",
          shortName: "THU",
        },
        awayTeam: {
          isBatting: false,
          id: 670,
          name: "Lightning",
          shortName: "LIG",
        },
        currentMatchState: "Lightning win by 134 runs",
        isMultiDay: false,
        matchSummaryText: "Lightning win by 134 runs",
        scores: {
          homeScore: "125",
          homeOvers: "39.2",
          awayScore: "5-259",
          awayOvers: "50.0",
        },
        liveStreams: [],
        isLive: false,
        currentInningId: 2,
        isMatchDrawn: false,
        isMatchAbandoned: false,
        winningTeamId: 670,
        startDateTime: "2021-06-06T09:30:00Z",
        endDateTime: "2021-06-06T17:30:00Z",
        isWomensMatch: false,
        isGamedayEnabled: false,
        removeMatch: false,
      },
      {
        id: 50003,
        matchTypeId: 15,
        series: {
          id: 2739,
          name: "LV= Insurance County Championship 2021",
          shortName: "LV= Insurance County Championship 2021",
        },
        name: "",
        status: "COMPLETED",
        venue: {
          name: "Uptonsteel County Ground",
          shortName: "Uptonsteel County Ground",
        },
        homeTeam: {
          isBatting: false,
          id: 49,
          name: "Leicestershire",
          shortName: "LEI",
        },
        awayTeam: {
          isBatting: true,
          id: 46,
          name: "Gloucestershire",
          shortName: "GLO",
        },
        currentMatchState: "Leicestershire win by an innings and  93 runs",
        isMultiDay: true,
        matchSummaryText: "Leicestershire win by an innings and  93 runs",
        scores: {
          homeScore: "451",
          homeOvers: "132.0",
          awayScore: "158 & 200",
          awayOvers: "50.3 & 70.0",
        },
        liveStreams: [],
        isLive: false,
        currentInningId: 3,
        isMatchDrawn: false,
        isMatchAbandoned: false,
        winningTeamId: 49,
        startDateTime: "2021-06-03T10:00:00Z",
        endDateTime: "2021-06-06T17:00:00Z",
        isWomensMatch: false,
        isGamedayEnabled: false,
        removeMatch: false,
      },
      {
        id: 49997,
        matchTypeId: 15,
        series: {
          id: 2739,
          name: "LV= Insurance County Championship 2021",
          shortName: "LV= Insurance County Championship 2021",
        },
        name: "",
        status: "COMPLETED",
        venue: {
          name: "New Road",
          shortName: "New Road",
        },
        homeTeam: {
          isBatting: false,
          id: 56,
          name: "Worcestershire",
          shortName: "WOR",
        },
        awayTeam: {
          isBatting: true,
          id: 47,
          name: "Durham",
          shortName: "DUR",
        },
        currentMatchState: "Durham win by 10 wickets",
        isMultiDay: true,
        matchSummaryText: "Durham win by 10 wickets",
        scores: {
          homeScore: "131 & 336",
          homeOvers: "50.3 & 102.5",
          awayScore: "381 & 0-89",
          awayOvers: "109.3 & 20.2",
        },
        liveStreams: [],
        isLive: false,
        currentInningId: 4,
        isMatchDrawn: false,
        isMatchAbandoned: false,
        winningTeamId: 47,
        startDateTime: "2021-06-03T10:00:00Z",
        endDateTime: "2021-06-06T17:00:00Z",
        isWomensMatch: false,
        isGamedayEnabled: false,
        removeMatch: false,
      },
      {
        id: 50002,
        matchTypeId: 15,
        series: {
          id: 2739,
          name: "LV= Insurance County Championship 2021",
          shortName: "LV= Insurance County Championship 2021",
        },
        name: "",
        status: "COMPLETED",
        venue: {
          name: "The Cooper Associates County Ground",
          shortName: "The Cooper Associates County Ground",
        },
        homeTeam: {
          isBatting: false,
          id: 55,
          name: "Somerset",
          shortName: "SOM",
        },
        awayTeam: {
          isBatting: true,
          id: 43,
          name: "Hampshire",
          shortName: "HAM",
        },
        currentMatchState: "Match Drawn",
        isMultiDay: true,
        matchSummaryText: "Match Drawn",
        scores: {
          homeScore: "360 & 7d-409",
          homeOvers: "83.2 & 103.1",
          awayScore: "311 & 2-88",
          awayOvers: "104.2 & 33.2",
        },
        liveStreams: [],
        isLive: false,
        currentInningId: 4,
        isMatchDrawn: true,
        isMatchAbandoned: false,
        startDateTime: "2021-06-03T10:00:00Z",
        endDateTime: "2021-06-06T17:00:00Z",
        isWomensMatch: false,
        isGamedayEnabled: false,
        removeMatch: false,
      },
      {
        id: 50001,
        matchTypeId: 15,
        series: {
          id: 2739,
          name: "LV= Insurance County Championship 2021",
          shortName: "LV= Insurance County Championship 2021",
        },
        name: "",
        status: "COMPLETED",
        venue: {
          name: "Sophia Gardens Cardiff",
          shortName: "Sophia Gardens Cardiff",
        },
        homeTeam: {
          isBatting: true,
          id: 52,
          name: "Glamorgan",
          shortName: "GLA",
        },
        awayTeam: {
          isBatting: false,
          id: 51,
          name: "Lancashire",
          shortName: "LAN",
        },
        currentMatchState: "COMPLETED",
        isMultiDay: true,
        matchSummaryText: "",
        scores: {
          homeScore: "150 & 4-188",
          homeOvers: "39.2 & 58.1",
          awayScore: "173 & 164",
          awayOvers: "56.1 & 51.1",
        },
        liveStreams: [],
        isLive: false,
        currentInningId: 4,
        isMatchDrawn: true,
        isMatchAbandoned: false,
        startDateTime: "2021-06-03T10:00:00Z",
        endDateTime: "2021-06-06T17:00:00Z",
        isWomensMatch: false,
        isGamedayEnabled: false,
        removeMatch: false,
      },
      {
        id: 51022,
        matchTypeId: 0,
        series: {
          id: 2795,
          name: "Netherlands v Ireland ODI Series 2021",
          shortName: "Netherlands v Ireland ODI Series 2021",
        },
        name: "3rd ODI",
        status: "UPCOMING",
        venue: {
          name: "Sportpark Maarschalkerweerd",
          shortName: "Sportpark Maarschalkerweerd",
        },
        homeTeam: {
          isBatting: false,
          id: 14,
          name: "Netherlands",
          shortName: "NET",
        },
        awayTeam: {
          isBatting: false,
          id: 24,
          name: "Ireland",
          shortName: "IRE",
        },
        currentMatchState: "UPCOMING",
        isMultiDay: false,
        matchSummaryText: "",
        liveStreams: [],
        isLive: false,
        currentInningId: 0,
        isMatchDrawn: false,
        isMatchAbandoned: false,
        startDateTime: "2021-06-07T08:30:00Z",
        endDateTime: "2021-06-07T16:30:00Z",
        isWomensMatch: false,
        isGamedayEnabled: false,
        removeMatch: false,
      },
      {
        id: 50278,
        matchTypeId: 0,
        series: {
          id: 2761,
          name: "Vitality Blast 2021",
          shortName: "Vitality Blast 2021",
        },
        name: "",
        status: "UPCOMING",
        venue: {
          name: "Emirates Old Trafford",
          shortName: "Emirates Old Trafford",
        },
        homeTeam: {
          isBatting: false,
          id: 51,
          name: "Lancashire",
          shortName: "LAN",
        },
        awayTeam: {
          isBatting: false,
          id: 48,
          name: "Derbyshire",
          shortName: "DER",
        },
        currentMatchState: "UPCOMING",
        isMultiDay: false,
        matchSummaryText: "",
        liveStreams: [],
        isLive: false,
        currentInningId: 0,
        isMatchDrawn: false,
        isMatchAbandoned: false,
        startDateTime: "2021-06-09T13:30:00Z",
        endDateTime: "2021-06-09T16:30:00Z",
        isWomensMatch: false,
        isGamedayEnabled: false,
        removeMatch: false,
      },
    ]);
    // fetch(`https://cricket.sportmonks.com/api/v2.0/scores?api_token=${token}`)
    //   .then((res) => res.json())
    //   .then((result) => console.log(result));
  }, []);
  return (
    <div>
      <ScreenHeader> Upcoming Fixtures </ScreenHeader>
      <MatchCardsWrapper>
        {fixtures.map((fixture) => (
          <MatchPreviewCard matchDetails={fixture}> hello </MatchPreviewCard>
        ))}
      </MatchCardsWrapper>
    </div>
  );
}

export default App;
