var donut1 = document.documentElement.lang == 'fr' ? 'EST' : 'EASTERN';
var donut2 = document.documentElement.lang == 'fr' ? 'OUEST' : 'WESTERN';
var donut3 = document.documentElement.lang == 'fr' ? 'CENTRE' : 'CENTRAL';
var donut4 = document.documentElement.lang == 'fr' ? 'ATLANTIQUE' : 'ATLANTIC';

var donutEasternData         = [["Kia Ste-Foy", 126],["Kia de Brossard", 90],["Kia Québec", 90],["Other", 148]];
var donutWesternData         = [["Wheaton Kia", 24],["South Trail Kia", 14],["Harris Kia", 9],["Other", 14]];
var donutCentralData         = [["Kia of Owen Sound", 32],["Kia of North Bay", 28],["Gus Revenberg Kia", 23],["Other", 36]];
var donutAtlanticData        = [["Miramichi Kia", 11],["Edmundston Kia", 9],["Atlantic Kia", 1],["Other", 9]];
var donutEasternMonthlyData  = [["Kia Ste-Foy", 30], ["Kia de Brossard", 20],["Kia Québec", 18],["Other", 80]];
var donutWesternMonthlyData  = [["Wheaton Kia", 3],["Eastside Kia", 3],["North Shore Kia", 2],["Other", 6]];
var donutCentralMonthlyData  = [["Cambridge Kia", 10],["Gus Revenberg Kia", 6],["Kia of Owen Sound", 6],["Other", 14]];
var donutAtlanticMonthlyData = [["Miramichi Kia", 5],["Edmundston Kia", 3],["Bayside Kia", 1],["Other", 0]];


var barChartMonths = document.documentElement.lang == 'fr' ? ['x', 'Janv', 'Févr', 'Mars', 'Avril'] : ['x','Jan','Feb','Mar', 'April']

// TOP 10 DEALERS 
var barDataColumn1 = document.documentElement.lang == 'fr' ? ['CUMUL ANNUEL EN 2017', 126, 90, 90, 34, 32, 27, 25, 24, 23, 20] : ['YTD 2017', 126, 90, 90, 34, 32, 27, 25, 24, 23, 20]
var bar1DataColumn1 = document.documentElement.lang == 'fr' ? ['AVRIL 2017', 30, 20, 18, 11, 10, 8, 8, 7, 6, 6] : ['APRIL 2017', 30, 20, 18, 11, 10, 8, 8, 7, 6, 6]
// SALES BY MODEL 
var bar2DataColumn1 = document.documentElement.lang == 'fr' ? ['AVRIL 2017', 51, 38, 22, 27, 29, 15, 12, 13, 0, 0] : ['APRIL 2017', 51, 38, 22, 27, 29, 15, 12, 13, 0, 0]
var bar2DataColumn2 = document.documentElement.lang == 'fr' ? ['CUMUL ANNUEL EN 2017', 198, 157, 102, 117, 139, 84, 51, 50, 1, 2] : ['YTD 2017', 198, 157, 102, 117, 139, 84, 51, 50, 1, 2]
// SALES BY MODEL YEAR 
var bar3DataColumn1 = document.documentElement.lang == 'fr' ? ['AVRIL 2017', 9, 37, 27, 39, 62, 26, 7] : ['APRIL 2017', 9, 37, 27, 39, 62, 26, 7]
var bar3DataColumn2 = document.documentElement.lang == 'fr' ? ['CUMUL ANNUEL EN 2017', 33, 158, 91, 199, 267, 120, 33] : ['YTD 2017', 33, 158, 91, 199, 267, 120, 33]
// ANALYTICS CHART 
var bar4DataColumn1 = document.documentElement.lang == 'fr' ? ['STOCK MENSUEL', 190, 188, 200, 199] : ['Monthly Inventory', 190, 188, 200, 199]
//remove YTD // var bar4DataColumn2 = document.documentElement.lang == 'fr' ? ['STOCK AU CUMUL ANNUEL EN 2017', 190, 378, 578] : ['YTD', 190, 378, 578]

var bar5DataColumn1 = document.documentElement.lang == 'fr' ? ['VUES TOTALES', 3833, 4269, 7027, 7523] : ['Total Views', 3833, 4269, 7027, 7523]
var bar5DataColumn2 = document.documentElement.lang == 'fr' ? ['VUES UNIQUES', 2527, 2782, 3824, 2480] : ['Unique Views', 2527, 2782, 3824, 2480]
//remove YTD // var bar5DataColumn3 = document.documentElement.lang == 'fr' ? ['CUMUL ANNUEL EN 2017', 3833, 8102, 15129] : ['YTD', 3833, 8102, 15129]

var bar6DataColumn1 = document.documentElement.lang == 'fr' ? ['VUES TOTALES', 9384, 10377, 22106, 38134] : ['Total Views', 9384, 10377, 22106, 38134]
var bar6DataColumn2 = document.documentElement.lang == 'fr' ? ['VUES UNIQUES', 7743, 8139, 14398, 14323] : ['Unique Views', 7743, 8139, 14398, 14323]
//remove YTD // var bar6DataColumn3 = document.documentElement.lang == 'fr' ? ['CUMUL ANNUEL EN 2017', 9384, 19761, 41867] : ['YTD', 9384, 19761, 41867]

var red = //"#d02630"
    "#d84e56",
    lightGrey = "#d9d9d9",
    grey = "#a8a8a8",
    darkGrey = "#797979",
    darkerGrey = "#595959";

var greyScalePalette = [lightGrey, grey, darkGrey, darkerGrey];

/////// DONUT CHART YTD /////////
/// EASTERN donutChart
var donutChart = c3.generate({
    bindto: "#donut-eastern",
    data: {
        columns: donutEasternData,
        type: 'donut',
        order: null //chart will arrange data order starting from 12 O'clock moving clockwise in the order of the data.columns array
    },
    donut: {
        title: donut1,
        width: 60,
        label: {
            threshold: 0.1,
            show: true
        }
    },
    legend: { hide: true },
    size: { width: 320, height: 320 },
    interaction: {enabled: false},
    color: { pattern: greyScalePalette}
});

/// WESTERN donutChart

var donutChart2 = c3.generate({
    bindto: "#donut-western",
    data: {
        columns: donutWesternData,
        type: 'donut',
        order: null
    },
    donut: {
        title: donut2,
        width: 60,
        label: {
            threshold: 0.1,
            show: true
        }
    },
    legend: { hide: true },
    size: { width: 320, height: 320 },
    interaction: {enabled: false},
    color: { pattern: greyScalePalette}
});

/// CENTRAL donutChart

var donutChart3 = c3.generate({
    bindto: "#donut-central",
    data: {
        columns: donutCentralData,
        type: 'donut',
        order: null
    },
    donut: {
        title: donut3,
        width: 60,
        label: {
            threshold: 0.1,
            show: true
        }
    },
    legend: { hide: true },
    size: { width: 320, height: 320 },
    interaction: {enabled: false},
    color: { pattern: greyScalePalette}
});

/// ATLANTIC donutChart

var donutChart4 = c3.generate({
    bindto: "#donut-atlantic",
    data: {
        columns: donutAtlanticData,
        type: 'donut',
        order: null
    },
    donut: {
        title: donut4,
        width: 60,
        label: {
            threshold: 0.1,
            show: true
        }
    },
    legend: { hide: true },
    size: { width: 320, height: 320 },
    interaction: {enabled: false},
    color: { pattern: greyScalePalette}
});

/////// DONUT CHART MONTHLY /////////
/// EASTERN donutChart
var donutChart5 = c3.generate({
    bindto: "#donut-eastern-month",
    data: {
        columns: donutEasternMonthlyData,
        type: 'donut',
        order: null
    },
    donut: {
        title: donut1,
        width: 60,
        label: {
            threshold: 0.1,
            show: true
        }
    },
    legend: { hide: true },
    size: { width: 320, height: 320 },
    interaction: {enabled: false},
    color: { pattern: greyScalePalette}
});

/// WESTERN donutChart

var donutChart6 = c3.generate({
    bindto: "#donut-western-month",
    data: {
        columns: donutWesternMonthlyData,
        type: 'donut',
        order: null
    },
    donut: {
        title: donut2,
        width: 60,
        label: {
            threshold: 0.1,
            show: true
        }
    },
    legend: { hide: true },
    size: { width: 320, height: 320 },
    interaction: {enabled: false},
    color: { pattern: greyScalePalette}
});

/// CENTRAL donutChart

var donutChart7 = c3.generate({
    bindto: "#donut-central-month",
    data: {
        columns: donutCentralMonthlyData,
        type: 'donut',
        order: null
    },
    donut: {
        title: donut3,
        width: 60,
        label: {
            threshold: 0.1,
            show: true
        }
    },
    legend: { hide: true },
    size: { width: 320, height: 320 },
    interaction: {enabled: false},
    color: { pattern: greyScalePalette}
});

/// ATLANTIC donutChart

var donutChart8 = c3.generate({
    bindto: "#donut-atlantic-month",
    data: {
        columns: donutAtlanticMonthlyData,
        type: 'donut',
        order: null
    },
    donut: {
        title: donut4,
        width: 60,
        label: {
            threshold: 0.1,
            show: true
        }
    },
    legend: { hide: true },
    size: { width: 320, height: 320 },
    interaction: {enabled: false},
    color: { pattern: greyScalePalette}
});





/// TOP 10 Dealers

var bar = c3.generate({
    bindto: "#bar-topTen",
    data: {
        columns: [
            /*['MARCH 2017', 30, 200, 100, 400, 150, 250, 111, 210, 200, 190],*/
            /*['YTD 2017', 7, 18, 23, 71, 18, 18, 29, 78, 103, 22],*/
            barDataColumn1
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.4
        }
    },
    axis: {
        x: {
            type: 'category',
            /*categories: ['Automobiles du Boulevard Kia', 'Kia Beauport', 'Boisvert Kia', 'Kia de Brossard', 'Chambly Kia', 'Kia de Magog', 'Kia of Owen Sound', 'Kia Québec', 'Kia Ste-Foy', 'Wheaton Kia']*/
            categories: ['Kia Ste-Foy','Mega Kia Brossard','Kia Quebec','Boisvert Kia','Kia Of Owen Sound','Automobiles Du Boulevard Kia','Chambly Kia','Wheaton Kia','Gus Revenberg Kia','Kia de Magog']
        }
    },
    legend: { hide: true },
    grid: { y: { show: true } },
    color: { pattern: [red/*,'#d9d9d9'*/]}
});

if ( window.matchMedia( "(max-width: 750px)" ).matches ) {
    var bar = c3.generate({
        bindto: "#bar-topTen",
        data: {
            columns: [
                /*['MARCH 2017', 30, 200, 100, 400, 150, 250, 111, 210, 200, 190],*/
                /*['YTD 2017', 7, 18, 23, 71, 18, 18, 29, 78, 103, 22],*/
                barDataColumn1
            ],
            type: 'bar'
        },
        bar: {
            width: {
                ratio: 0.4
            }
        },
        axis: {
            rotated: true,
            x: {
                type: 'category',
                /*categories: ['Automobiles du Boulevard Kia', 'Kia Beauport', 'Boisvert Kia', 'Kia de Brossard', 'Chambly Kia', 'Kia de Magog', 'Kia of Owen Sound', 'Kia Québec', 'Kia Ste-Foy', 'Wheaton Kia']*/
                categories: ['Kia Ste-Foy','Mega Kia Brossard','Kia Quebec','Boisvert Kia','Kia Of Owen Sound','Automobiles Du Boulevard Kia','Chambly Kia','Wheaton Kia','Gus Revenberg Kia','Kia de Magog']
            }
        },
        legend: { hide: true },
        grid: { y: { show: true } },
        color: { pattern: [red/*,'#d9d9d9'*/]}
    });
}



/// TOP 10 Dealers Monthly

var bar1 = c3.generate({
    bindto: "#bar-topTenMonthly",
    data: {
        columns: [
            /*['MARCH 2017', 30, 200, 100, 400, 150, 250, 111, 210, 200, 190],*/
            /*['YTD 2017', 7, 18, 23, 71, 18, 18, 29, 78, 103, 22],*/
            bar1DataColumn1
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.4
        }
    },
    axis: {
        x: {
            type: 'category',
            /*categories: ['Automobiles du Boulevard Kia', 'Kia Beauport', 'Boisvert Kia', 'Kia de Brossard', 'Chambly Kia', 'Kia de Magog', 'Kia of Owen Sound', 'Kia Québec', 'Kia Ste-Foy', 'Wheaton Kia']*/
            categories: ['Kia Ste-Foy','Mega Kia Brossard','Kia Quebec','Boisvert Kia','Kia Cambridge','Automobiles Du Boulevard Kia','Chambly Kia','Jean Dumas Kia','Kia Of Owen Sound','Gus Revenberg Kia']
        }
    },
    legend: { hide: true },
    grid: { y: { show: true } },
    color: { pattern: [red/*,'#d9d9d9'*/]}
});

if ( window.matchMedia( "(max-width: 750px)" ).matches ) {
    var bar = c3.generate({
        bindto: "#bar-topTen",
        data: {
            columns: [
                /*['MARCH 2017', 30, 200, 100, 400, 150, 250, 111, 210, 200, 190],*/
                /*['YTD 2017', 7, 18, 23, 71, 18, 18, 29, 78, 103, 22],*/
                bar1DataColumn1
            ],
            type: 'bar'
        },
        bar: {
            width: {
                ratio: 0.4
            }
        },
        axis: {
            rotated: true,
            x: {
                type: 'category',
                /*categories: ['Automobiles du Boulevard Kia', 'Kia Beauport', 'Boisvert Kia', 'Kia de Brossard', 'Chambly Kia', 'Kia de Magog', 'Kia of Owen Sound', 'Kia Québec', 'Kia Ste-Foy', 'Wheaton Kia']*/
                /*categories: ['Kia Ste-Foy','Kia Québec','Kia de Brossard','Kia of Owen Sound','Boisvert Kia','Wheaton Kia','Automobiles du Boulevard Kia','Kia Beauport','Chambly Kia','Kia de Magog']*/
                categories: ['Kia Ste-Foy','Mega Kia Brossard','Kia Quebec','Boisvert Kia','Kia Cambridge','Automobiles Du Boulevard Kia','Chambly Kia','Jean Dumas Kia','Kia Of Owen Sound','Gus Revenberg Kia']
            }
        },
        legend: { hide: true },
        grid: { y: { show: true } },
        color: { pattern: [red/*,'#d9d9d9'*/]}
    });
}



/// SALES BY MODEL


var bar2 = c3.generate({
    bindto: "#bar-salesByModel",
    data: {
        columns: [
            bar2DataColumn1,
            bar2DataColumn2
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.4
        }
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Sorento', 'Rio', 'Sportage', 'Soul', 'Forte', 'Optima', 'Sedona', 'Rondo', 'K900', 'Cadenza']
        },
    },
    legend: { hide: true },
    grid: { y: { show: true } },
    color: { pattern: [red, lightGrey]}
});

if ( window.matchMedia( "(max-width: 750px)" ).matches ) {
    var bar2 = c3.generate({
        bindto: "#bar-salesByModel",
        data: {
            columns: [
                bar2DataColumn1,
                bar2DataColumn2
            ],
            type: 'bar'
        },
        bar: {
            width: {
                ratio: 0.4
            }
        },
        axis: {
            rotated: true,
            x: {
                type: 'category',
                categories: ['Sorento', 'Rio', 'Sportage', 'Soul', 'Forte', 'Optima', 'Sedona', 'Rondo', 'K900', 'Cadenza']
            },
        },
        legend: { hide: true },
        grid: { y: { show: true } },
        color: { pattern: [red, lightGrey]}
    });
}

/// SALES BY MODEL YEAR

var bar3 = c3.generate({
    bindto: "#bar-salesByModelYear",
    data: {
        columns: [
            bar3DataColumn1,
            bar3DataColumn2
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.4
        }
    },
    axis: {
        x: {
            type: 'category',
            categories: ['2017', '2016', '2015', '2014', '2013', '2012', '2011']
        }
    },
    legend: { hide: true },
    grid: { y: { show: true } },
    color: { pattern: [red, lightGrey]}
});


if ( window.matchMedia( "(max-width: 750px)" ).matches ) {
    var bar3 = c3.generate({
        bindto: "#bar-salesByModelYear",
        data: {
            columns: [
                bar3DataColumn1,
                bar3DataColumn2
            ],
            type: 'bar'
        },
        bar: {
            width: {
                ratio: 0.4
            }
        },
        axis: {
            rotated: true,
            x: {
                type: 'category',
                categories: ['2017', '2016', '2015', '2014', '2013', '2012', '2011']
            }
        },
        legend: { hide: true },
        grid: { y: { show: true } },
        color: { pattern: [red, lightGrey]}
    });
}

/// ANALYTICS CHART

var bar4 = c3.generate({
    bindto: "#bar-vehiclesLive",
    data: {
        x: 'x',
        labels: true,
        columns: [
            barChartMonths,
            bar4DataColumn1,
            //bar4DataColumn2
        ],
        type: 'line',
    },
    axis: {
        x: {
            type: 'category',
            tick: { outer: true}
        }
    },
    legend: { hide: true },
    grid: { y: { show: true } },
    color: { pattern: [red]}
});

var bar5 = c3.generate({
    bindto: "#bar-visitorsCertified",
    data: {
        x: 'x',
        labels: true,
        columns: [
            barChartMonths,
            bar5DataColumn1,
            bar5DataColumn2,
            //bar5DataColumn3
        ],
        type: 'line',
    },
    axis: {
        x: {
            type: 'category',
            tick: { outer: true}
        }
    },
    legend: { hide: true },
    grid: { y: { show: true } },
    color: { pattern: [red, grey]}
});

var bar6 = c3.generate({
    bindto: "#bar-cpoVehicle",
    data: {
        x: 'x',
        labels: true,
        columns: [
            barChartMonths,
            bar6DataColumn1,
            bar6DataColumn2,
            //bar6DataColumn3
        ],
        type: 'line',
    },

    axis: {
        x: {
            type: 'category',
            tick: { outer: true}
        }
    },
    legend: { hide: true },
    grid: { y: { show: true } },
    color: { pattern: [red, grey]}
});

// Smooth scroll
var toTopBtn = $('#btn-totop'),
    $nav = $('nav'),
    $news = $('#news');

toTopBtn.click(function() {

   if ($('html, body').is(":not(:animated)")) {
      $('html, body').animate({
         scrollTop: $nav.offset().top - 50
      }, 1000);
   }
});

$('a[href*="#"]:not([href="#"])').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
   var target = $(this.hash);
   target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
   if (target.length && $('html, body').is(":not(:animated)")) {
      $('html, body').animate({
         scrollTop: target.offset().top
      }, 1000);
      return false;
   }
   }
});
