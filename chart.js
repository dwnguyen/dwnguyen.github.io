let STATE_MAP = {
    "Arizona": "AZ",
    "Alabama": "AL",
    "Alaska": "AK",
    "Arkansas": "AR",
    "California": "CA",
    "Colorado": "CO",
    "Connecticut": "CT",
    "Delaware": "DE",
    "Florida": "FL",
    "Georgia": "GA",
    "Hawaii": "HI",
    "Idaho": "ID",
    "Illinois": "IL",
    "Indiana": "IN",
    "Iowa": "IA",
    "Kansas": "KS",
    "Kentucky": "KY",
    "Louisiana": "LA",
    "Maine": "ME",
    "Maryland": "MD",
    "Massachusetts": "MA",
    "Michigan": "MI",
    "Minnesota": "MN",
    "Mississippi": "MS",
    "Missouri": "MO",
    "Montana": "MT",
    "Nebraska": "NE",
    "Nevada": "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    "Ohio": "OH",
    "Oklahoma": "OK",
    "Oregon": "OR",
    "Pennsylvania": "PA",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    "Tennessee": "TN",
    "Texas": "TX",
    "Utah": "UT",
    "Vermont": "VT",
    "Virginia": "VA",
    "Washington": "WA",
    "District of Columbia": "DC",
    "West Virginia": "WV",
    "Wisconsin": "WI",
    "Wyoming": "WY"
}

let CSV = `State,Tested,Infected,Deaths,Population,Pop Density,Gini,ICU Beds,Income,GDP,Unemployment,Sex Ratio,Smoking Rate,Flu Deaths,Respiratory Deaths,Physicians,Hospitals,Health Spending,Pollution,Med-Large Airports,Temperature,Urban,Age 0-25,Age 26-54,Age 55+,School Closure Date
Alaska,620170,17057,84,734002,1.2863,0.4081,119,59687,73205,5.8,1.0546875,21.0,12.1,35.3,1900,21,11064,6.4,1.0,26.6,66.0,0.36,0.39,0.25,03/19/20
Alabama,1356420,194892,2973,4908621,96.9221,0.4847,1533,42334,45219,2.7,0.9301445145532259,20.9,21.4,58.0,12205,101,7281,8.1,1.0,62.8,59.0,0.33,0.37,0.31000000000000005,03/16/20
Arkansas,1363429,113641,1985,3038999,58.403,0.4719,732,42566,42454,3.5,0.9566299085529856,22.3,18.0,61.7,7150,88,7408,7.1,0.0,60.4,56.2,0.34,0.37,0.30000000000000004,03/17/20
Arizona,1792602,248139,5982,7378494,64.955,0.4713,1559,43650,48055,4.5,0.966964722118398,15.6,12.4,41.2,17806,83,6452,9.7,1.0,60.3,89.8,0.33,0.36,0.3,03/16/20
California,18912501,930628,17672,39937489,256.3727,0.4899,7338,62586,74205,3.9,0.9751132606832374,11.3,15.6,30.9,112906,359,7549,12.8,9.0,59.4,95.0,0.33,0.4,0.26,03/19/20
Colorado,2034795,109910,2105,5845526,56.4011,0.4586,1597,56846,63882,2.5,0.9948495032144944,14.6,9.7,44.0,14509,89,6804,6.7,1.0,45.1,86.2,0.33,0.4,0.27,03/23/20
Connecticut,2367994,73858,4627,3563077,735.8689,0.4945,674,74561,76342,3.8,0.9471062353072875,12.7,14.8,28.9,15605,32,9859,7.2,1.0,49.0,88.0,0.3,0.38,0.32,03/17/20
District of Columbia,528174,17438,647,720687,11814.541,0.542,314,47285,200277,5.2,0.8885697874784606,14.3,11.2,19.6,7346,10,11944,9.8,0.0,54.65,100.0,0.30000000000000004,0.48,0.22,03/16/20
Delaware,565983,25311,710,982895,504.3073,0.4522,186,51449,77253,3.9,0.9261939218523878,17.0,13.1,40.4,3148,7,10254,8.3,0.0,55.3,83.3,0.3,0.37,0.33,03/16/20
Florida,10126764,801371,17043,21992985,410.1256,0.4852,5604,49417,48318,2.8,0.9422130992470392,16.1,9.6,37.0,56499,217,8076,7.4,7.0,70.7,91.2,0.29,0.37,0.35,03/16/20
Georgia,3596700,362921,7999,10736059,186.6719,0.4813,2508,45745,55832,3.1,0.9276477422058012,17.5,14.5,45.7,25312,145,6587,8.3,1.0,63.5,75.1,0.35,0.39,0.26,03/18/20
Hawaii,533672,15367,219,1412687,219.9419,0.442,201,54565,64096,2.7,0.9545978668204094,12.8,24.5,19.6,3660,22,7299,5.4,2.0,70.0,91.9,0.30000000000000004,0.37,0.32,03/23/20
Iowa,900994,123372,1741,3179849,56.9284,0.4451,545,48823,59977,2.8,0.972411113269866,17.1,15.7,43.8,8511,118,8200,7.1,0.0,47.8,64.0,0.34,0.36,0.30000000000000004,
Idaho,387935,65088,630,1826156,22.0969,0.4503,314,43155,43430,2.7,1.002976899261729,14.3,11.9,44.1,3012,45,6927,6.8,0.0,44.4,70.6,0.36,0.36,0.28,03/23/20
Illinois,7882680,429761,10093,12659682,228.0243,0.481,3144,56933,67268,3.4,0.955037546933667,15.5,16.3,36.2,43377,187,8262,9.3,2.0,51.8,88.5,0.33,0.38,0.28,03/17/20
Indiana,2970330,185185,4390,6745354,188.281,0.4527,1861,46646,55172,3.1,0.9603350429425508,21.8,14.0,57.2,16816,132,8300,8.4,1.0,51.7,72.4,0.34,0.37,0.29000000000000004,03/19/20
Kansas,655267,89227,1046,2910357,35.5968,0.455,767,50155,56334,3.1,0.9819217782779966,17.4,17.1,50.4,7926,139,7651,7.0,0.0,54.3,74.2,0.35,0.36,0.29000000000000004,03/18/20
Kentucky,1926140,109670,1492,4499692,113.9566,0.4813,1392,41779,46898,4.2,0.963484682713348,24.6,18.3,62.1,11937,105,8004,8.1,1.0,55.6,58.4,0.33,0.38,0.30000000000000004,03/16/20
Louisiana,2788484,187995,5934,4645184,107.5175,0.499,1289,45542,53589,5.2,0.9312808300731416,23.1,15.6,43.1,13821,158,7815,7.9,1.0,66.4,73.2,0.34,0.37,0.28,03/16/20
Massachusetts,6217043,160549,10023,6976597,894.4355,0.4786,1326,70073,82480,2.8,0.9436615583348013,13.7,15.8,30.9,36506,75,10559,6.3,1.0,47.9,92.0,0.3,0.39,0.31000000000000005,03/17/20
Maryland,3479230,146995,4155,6083116,626.6731,0.4499,1134,62914,68573,3.3,0.9293782536096652,13.8,13.6,31.0,24676,50,8602,7.7,1.0,54.2,87.2,0.31,0.39,0.29000000000000004,03/16/20
Maine,644435,6799,148,1345790,43.6336,0.4519,256,48241,47969,3.2,0.9578376750489384,17.3,15.3,45.6,4721,34,9531,5.9,0.0,41.0,38.7,0.26,0.37,0.37,
Michigan,5008299,204326,7716,10045029,177.6655,0.4695,2423,47582,53209,3.6,0.958849726941136,19.3,14.5,44.1,38819,144,8055,8.0,1.0,44.4,74.6,0.32,0.37,0.31000000000000005,03/16/20
Minnesota,2872763,153620,2484,5700671,71.5922,0.4496,1171,56374,64675,3.1,0.983828082316518,14.5,10.0,34.0,18171,127,8871,6.6,1.0,41.2,73.3,0.32,0.38,0.30000000000000004,03/18/20
Missouri,2553774,188186,3031,6169270,89.7453,0.4646,1888,46635,51699,3.5,0.9517123174791522,20.8,18.7,50.2,20275,122,8107,7.5,2.0,54.6,70.4,0.33,0.37,0.31000000000000005,03/19/20
Mississippi,958073,120865,3348,2989260,63.7056,0.4828,824,37994,37948,5.4,0.9240261472785486,22.2,26.1,59.9,6597,99,7646,7.7,0.0,63.4,49.4,0.35,0.36,0.29000000000000004,03/20/20
Montana,508931,34252,386,1086759,7.4668,0.4667,165,47120,46609,3.5,0.983896003104385,17.2,10.7,47.0,2326,56,8221,6.6,0.0,42.7,55.9,0.31,0.35,0.34,03/16/20
North Carolina,4127596,278028,4390,10611862,218.2702,0.478,2227,45834,54441,3.6,0.928473124115606,17.2,16.9,42.6,28379,112,7264,7.2,2.0,59.0,66.1,0.32,0.38,0.29000000000000004,03/16/20
North Dakota,848765,46015,417,761723,11.0393,0.4533,238,54306,72597,2.2,1.0416197975253094,18.3,15.6,34.9,2015,39,9851,4.6,0.0,40.4,59.9,0.35,0.37,0.28,03/16/20
Nebraska,950497,71666,654,1952570,25.4161,0.4477,440,52110,63942,2.9,0.9923917702528932,15.4,16.1,47.7,5627,93,8412,7.1,1.0,48.8,73.1,0.35,0.37,0.29000000000000004,
New Hampshire,626532,11320,483,1371246,153.1605,0.4304,242,61405,63067,2.6,0.983937586048646,15.7,14.3,40.9,4240,28,9589,4.4,0.0,43.8,60.3,0.28,0.37,0.34,03/16/20
New Jersey,4721797,240997,16357,8936574,1215.1991,0.4813,1822,67609,69378,3.8,0.9466984358108852,13.7,12.6,28.0,30502,82,8859,8.1,1.0,52.7,94.7,0.31,0.38,0.30000000000000004,03/18/20
New Mexico,1182514,47232,1026,2096640,17.285,0.4769,340,41198,46954,4.8,0.9722275982194696,17.5,14.2,43.0,5830,41,7214,6.0,1.0,53.4,77.4,0.33,0.36,0.31,03/16/20
Nevada,1270643,102114,1784,3139658,28.5993,0.4577,900,48225,55269,3.6,0.988124957830106,17.6,16.0,49.3,6151,44,6714,9.0,1.0,49.9,94.2,0.32,0.4,0.29000000000000004,03/16/20
New York,14772754,511368,25838,19440469,412.5211,0.5229,3952,68667,85746,3.7,0.9375570512884814,14.1,18.4,28.5,89500,166,9778,6.6,3.0,45.4,87.9,0.31,0.39,0.30000000000000004,03/18/20
Ohio,4564903,221909,5340,11747694,287.5038,0.468,3314,48242,57492,4.1,0.9502936566714316,21.1,15.7,49.0,42373,194,8712,8.5,3.0,50.7,77.9,0.32,0.37,0.31000000000000005,03/17/20
Oklahoma,1619827,125195,1354,3954821,57.6547,0.4645,1064,46128,50613,3.2,0.957441333882256,20.1,17.8,63.5,9472,125,7627,8.2,0.0,59.6,66.2,0.35,0.37,0.29000000000000004,03/17/20
Oregon,871900,45978,692,4301089,44.8086,0.4583,659,49908,56956,3.3,0.9762634369375942,16.1,10.2,35.6,12149,61,8044,7.8,1.0,48.4,81.0,0.3,0.39,0.31,03/16/20
Pennsylvania,2550660,211996,8823,12820878,286.5449,0.4689,3169,55349,61594,4.7,0.9542091897092922,18.7,15.5,35.1,51069,199,9258,9.2,2.0,48.8,78.7,0.3,0.37,0.32,03/16/20
Rhode Island,1158387,34120,1210,1056161,1021.4323,0.4781,279,54523,57852,3.4,0.9428188946261236,14.9,13.3,31.2,4988,11,9551,7.3,0.0,50.1,90.7,0.29000000000000004,0.39,0.32,03/16/20
South Carolina,1842038,178917,3946,5210095,173.3174,0.4735,1225,42736,45280,2.5,0.9231468669697568,18.8,14.5,45.8,12847,69,7311,7.4,0.0,62.4,66.3,0.32,0.36,0.32,03/16/20
South Dakota,263127,47850,438,903027,11.9116,0.4495,152,50141,58624,3.3,1.0062320230105466,19.3,20.7,43.7,2041,57,8933,5.1,0.0,45.2,56.7,0.35,0.35,0.30000000000000004,03/16/20
Tennessee,3720657,264587,3379,6897576,167.2748,0.479,2209,47179,53933,3.4,0.9381632774055848,22.6,20.7,55.9,18979,115,7372,7.4,1.0,57.6,66.4,0.33,0.38,0.29000000000000004,03/20/20
Texas,8291703,909257,18097,29472295,112.8204,0.48,6199,49161,61167,3.5,0.9695945464139534,15.7,12.9,39.7,64602,523,6998,8.3,6.0,64.8,84.7,0.36,0.39,0.24,03/23/20
Utah,1410145,117706,614,3282115,39.94300000000001,0.4063,565,45340,55550,2.5,1.007377643106515,8.9,13.4,33.2,6761,54,5982,8.4,1.0,48.6,90.6,0.42,0.37,0.21,03/16/20
Virginia,2663155,183418,3658,8626207,218.4403,0.4705,1654,56952,62563,2.6,0.9365558912386708,16.4,13.1,34.7,23307,96,7556,6.9,2.0,55.1,75.5,0.33,0.38,0.29000000000000004,03/16/20
Vermont,415518,2219,58,628061,68.1416,0.4539,94,53598,53523,2.4,0.971747700394218,15.8,9.8,39.6,2338,14,10190,5.1,0.0,42.9,38.9,0.27,0.36,0.36,03/18/20
Washington,2469146,108315,2366,7797095,117.3272,0.4591,1265,60781,74182,3.8,0.9834525081504616,13.5,10.9,34.5,22036,92,7913,8.0,1.0,48.3,84.1,0.31,0.4,0.29000000000000004,03/17/20
Wisconsin,3327915,244928,2113,5851754,108.0497,0.4498,1159,50756,57720,3.5,0.9795832456324984,16.0,14.1,37.8,17695,133,8702,6.8,1.0,43.1,70.2,0.32,0.37,0.31000000000000005,03/18/20
West Virginia,794491,25235,458,1778070,73.9691,0.4711,653,40578,43053,4.9,0.9607210415043952,26.0,21.2,64.3,5685,56,9462,7.6,0.0,51.8,48.7,0.29,0.36,0.35,03/16/20
Wyoming,134018,14167,87,567025,5.84,0.436,102,60095,69900,3.7,1.0357788218286954,18.7,18.9,58.7,1172,29,8320,5.0,0.0,42.0,64.8,0.32,0.36,0.31000000000000005,03/20/20
`
async function load() {
    const width = 1000
    const height = 500
    const margin = 100
    let data = await d3.csvParse(CSV)
    data = data.map(d => {
        d.stateAbr = STATE_MAP[d.State]
        d.deaths = parseInt(d.Deaths)
        d.deathsPerCapita = d.Deaths / d.Population
        d.population = parseInt(d.Population)
        return d
    })
    console.log(data)

    function colorByState(d) {
        switch (d.stateAbr) {
            case 'CA': return 'blue'
            case 'NY': return 'green'
            case 'TX': return 'red'
            case 'RI': return 'purple'
            default: return 'white'
        }
    }


    function chart1() {
        const height = 500
        const chart1Data = [...data].sort((a, b) => {
            const aVal = a.deaths
            const bVal = b.deaths
            if (aVal < bVal) return 1
            if (aVal == bVal) return 0
            else return -1
        });
        d3.select('#chart1')
            .attr('width', width)
            .attr('height', height)

        const x = d3.scaleBand()
            .domain(chart1Data.map(d => d.stateAbr))
            .range([margin, width - margin])
            .padding(0.2);
        const y = d3.scaleLinear()
            .domain([0, d3.max(chart1Data, (d) => d.deaths)])
            .range([height - margin, 10]);
        const svg = d3.select('#chart1')
        svg.selectAll('rect').data(chart1Data).enter().append('rect')
            .attr('class', 'datapoint')
            .attr('x', (d) => x(d.stateAbr))
            .attr('y', (d) => y(d.deaths))
            .attr('height', (d) => y(0) - y(d.deaths))
            .attr('width', x.bandwidth())

        svg.append('g').attr('transform', `translate(${margin}, 0)`).call(d3.axisLeft(y))
        svg.append('g').attr('transform', `translate(0, ${height - margin})`).call(d3.axisBottom(x))
        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("x", width / 2)
            .attr("y", height - margin + 50)
            .text("State");

        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("transform", "rotate(-90)")
            .attr("y", 25)
            .attr("x", -height / 2)
            .text("# of COVID-19 Deaths")


        const annotations = [
            {
                note: {
                    label: "According to this measure, NY, TX, and CA appear to have handled COVID-19 the worst of all the states.",
                    wrap: 200
                },
                //can use x, y directly instead of data
                x: 150,
                y: height - margin + 20,
                dy: -200,
                dx: 50,
                subject: {
                    width: -50,
                    height: -height + 80
                }
            },
            {
                note: {
                    label: "In comparison, Rhode Island appears to have handled COVID-19 well.",
                    wrap: 200

                },
                //can use x, y directly instead of data
                data: data.find(d => d.stateAbr == 'KS'),
                dy: -100,
                dx: -50,
                subject: {
                    width: -19,
                    height: -45
                }
            },

        ]

        const type = d3.annotationCalloutRect

        const makeAnnotations = d3.annotation()
            //also can set and override in the note.padding property
            //of the annotation object
            .type(type)
            .notePadding(15)

            //accessors & accessorsInverse not needed
            //if using x, y in annotations JSON
            .accessors({
                x: d => x(d.stateAbr) + (x.bandwidth() / 2) - 6,
                y: d => y(0) + 20
            })
            .accessorsInverse({
                stateAbr: d => x.invert(d.x),
                deaths: d => y.invert(d.y)
            })
            .annotations(annotations)

        svg.append("g")
            .call(makeAnnotations)
    }

    function chart2() {

        d3.select('#chart2')
            .attr('width', width)
            .attr('height', height)

        const svg = d3.select('#chart2')

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, (d) => d.deaths)])
            .range([height - margin, 10]);
        const x = d3.scaleLog()
            .domain([d3.min(data, (d) => d.population), d3.max(data, (d) => d.population)])
            .range([margin, width - margin]);
        svg.selectAll('circle').data(data).enter().append('circle')
            .attr('class', 'datapoint')
            .attr('cx', (d) => x(d.population))
            .attr('cy', (d) => y(d.deaths))
            .attr('r', 5)

        svg.append('g').attr('transform', `translate(${margin}, 0)`).call(d3.axisLeft(y))
        svg.append('g').attr('transform', `translate(0, ${height - margin})`).call(d3.axisBottom(x))


        const annotations = [
            {
                note: {
                    label: "Though NY, TX, and CA have the highest deaths, they also have the highest populations",
                    wrap: 200
                },
                //can use x, y directly instead of data
                x: 750,
                y: 0,
                dy: 200,
                dx: 0,
                subject: {
                    width: 175,
                    height: 190
                }
            },
            {
                note: {
                    label: "Rhode Island has a small number of deaths, but also a small population",
                    wrap: 200,
                },
                dx: 50,
                dy: -100,
                data: data.find(d => d.stateAbr == 'RI'),
                subject: {
                    width: 15,
                    height: 15
                }
            },
        ]

        const type = d3.annotationCalloutRect
        const makeAnnotations = d3.annotation()
            .type(type)
            .notePadding(15)
            .accessors({
                x: d => x(d.population) - 7,
                y: d => y(d.deaths) - 7
            })
            .accessorsInverse({
                stateAbr: d => x.invert(d.x),
                deaths: d => y.invert(d.y)
            })
            .annotations(annotations)

        svg.append("g")
            .call(makeAnnotations)
        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("x", width / 2)
            .attr("y", height - margin + 50)
            .text("Population");

        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("transform", "rotate(-90)")
            .attr("y", 25)
            .attr("x", -height / 2)
            .text("# of COVID-19 Deaths")


    }

    function chart3() {
        const height = 420
        const chart3Data = [...data].sort((a, b) => {
            const aVal = a.deathsPerCapita
            const bVal = b.deathsPerCapita
            if (aVal < bVal) return 1
            if (aVal == bVal) return 0
            else return -1
        });
        d3.select('#chart3')
            .attr('width', width)
            .attr('height', height)


        const x = d3.scaleBand()
            .domain(chart3Data.map(d => d.stateAbr))
            .range([margin, width - margin])
            .padding(0.2);
        const y = d3.scaleLinear()
            .domain([0, d3.max(chart3Data, (d) => d.deathsPerCapita)])
            .range([height - 20, 10]);
        const svg = d3.select('#chart3')
        svg.selectAll('rect').data(chart3Data).enter().append('rect')
            .attr('class', 'datapoint')

            .attr('x', (d) => x(d.stateAbr))
            .attr('y', (d) => y(d.deathsPerCapita))
            .attr('height', (d) => y(0) - y(d.deathsPerCapita))
            .attr('width', x.bandwidth())


        svg.append('g').attr('transform', `translate(${margin}, 0)`).call(d3.axisLeft(y))
        svg.append('g').attr('transform', `translate(0, ${height - 20})`).call(d3.axisBottom(x))
        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("x", width / 2)
            .attr("y", height - 20 + 50)
            .text("State");

        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("transform", "rotate(-90)")
            .attr("y", 25)
            .attr("x", -height / 2)
            .text("# of COVID-19 Deaths Per Capita")

        const annotations = [

            {
                note: {
                    label: "Contrary to the first chart, RI is now high among the states. This suggests that the low deaths of RI is related to its lower population rather than RI's response to COVID-19. ",
                    wrap: 250

                },
                //can use x, y directly instead of data
                data: data.find(d => d.stateAbr == 'RI'),
                dy: -45,
                dx: 200,
                subject: {
                    width: -19,
                    height: -45
                }
            },
            {
                note: {
                    label: "While still high in the chart, NY is no longer the left-most bar",
                    wrap: 200

                },
                //can use x, y directly instead of data
                data: data.find(d => d.stateAbr == 'NY'),
                dy: -25,
                dx: 20,
                subject: {
                    width: -19,
                    height: -45
                }
            },
            {
                note: {
                    label: "Removing the effect of population suggests that TX has high deaths mostly due to its large population. It is now in the middle of the range.",
                    wrap: 200

                },
                //can use x, y directly instead of data
                data: data.find(d => d.stateAbr == 'TX'),
                dy: -25,
                dx: 50,
                subject: {
                    width: -19,
                    height: -45
                }
            },
            {
                note: {
                    label: "CA has shifted far to the right in the same way as TX.",
                    wrap: 200

                },
                //can use x, y directly instead of data
                data: data.find(d => d.stateAbr == 'CA'),
                dy: -5,
                dx: 50,
                subject: {
                    width: -19,
                    height: -45
                }
            },

        ]


        const makeAnnotations = d3.annotation()
            //also can set and override in the note.padding property
            //of the annotation object
            .notePadding(15)

            //accessors & accessorsInverse not needed
            //if using x, y in annotations JSON
            .accessors({
                x: d => x(d.stateAbr) + (x.bandwidth() / 2),
                y: d => y(d.deathsPerCapita)
            })
            .accessorsInverse({
                stateAbr: d => x.invert(d.x),
                deaths: d => y.invert(d.y)
            })
            .annotations(annotations)

        svg.append("g")
            .call(makeAnnotations)


    }

    chart1()
    chart2()
    chart3()
    d3.selectAll('.datapoint').attr('fill', colorByState).attr('stroke', 'black')
        .on('mouseover', function (d, i) {
            const id = d3.select(this).data()[0].stateAbr

            d3.selectAll('.datapoint')
                .filter((p) => p.stateAbr == id)
                .transition()
                .duration('50')
                .attr('fill', 'yellow')
        })
        .on('mouseout', function (d, i) {
            const id = d3.select(this).data()[0].stateAbr

            d3.selectAll('.datapoint')
                .filter((p) => p.stateAbr == id)
                .transition()
                .duration('50')
                .attr('fill', colorByState)
        })

    d3.selectAll('svg').attr('style', 'display:none');
    d3.select('#chart1').attr('style', '');

}