var myData = [
	{ name : "Amoxicilline"	                 , value :41	, color1 : "chocolate"  , color2 : "limegreen"  } ,
	{ name : "Amoxicilline-Ac. clavulanique" , value :84	, color1 : "chocolate"  , color2 : "limegreen"  } ,
	{ name : "Céfalexine"	                 , value :95	, color1 : "green"      , color2 : "coral"      } ,
	{ name : "Céfalotine"	                 , value :92	, color1 : "green"      , color2 : "limegreen"  } ,
	{ name : "Céfoxitine"	                 , value :97	, color1 : "green"      , color2 : "limegreen"  } ,
	{ name : "Ceftiofur"	                 , value :99	, color1 : "green"      , color2 : "coral"      } ,
	{ name : "Cefquinome 30 µg"	             , value :98	, color1 : "green"      , color2 : "coral"      } ,
	{ name : "Streptomycine 10 UI"	         , value :49	, color1 : "gold"       , color2 : "limegreen"  } ,
	{ name : "Spectinomycine"	             , value :65	, color1 : "gold"       , color2 : "limegreen"  } ,
	{ name : "Gentamicine 10 UI"	         , value :91	, color1 : "gold"       , color2 : "limegreen"  } ,
	{ name : "Néomycine"	                 , value :81	, color1 : "gold"       , color2 : "limegreen"  } ,
	{ name : "Apramycine"	                 , value :93	, color1 : "gold"       , color2 : "limegreen"  } ,
	{ name : "Tétracycline"	                 , value :34	, color1 : "red"        , color2 : "limegreen"  } ,
	{ name : "Florfénicol"	                 , value :86	, color1 : "seagreen"   , color2 : "limegreen"  } ,
	{ name : "Ac. nalidixique"	             , value :81	, color1 : "navy"       , color2 : "limegreen"  } ,
	{ name : "Ac. oxolinique"	             , value :80	, color1 : "navy"       , color2 : "limegreen"  } ,
	{ name : "Fluméquine"	                 , value :79	, color1 : "navy"       , color2 : "limegreen"  } ,
	{ name : "Enrofloxacine"	             , value :96	, color1 : "navy"       , color2 : "coral"      } ,
	{ name : "Marbofloxacine"	             , value :96	, color1 : "navy"       , color2 : "coral"      } ,
	{ name : "Triméthoprime"                 , value :60	, color1 : "dodgerblue" , color2 : "limegreen"  } ,
	{ name : "Triméthoprime-Sulfamides"	     , value :49	, color1 : "dodgerblue" , color2 : "limegreen"  }
];


// constants to define the size
// and margins of the vis area.
var width = 600;
var height = 420;
var margin = { top: 40, left: 40, bottom: 40, right: 10 };

var NUMBER_OF_SLIDE = 8;

var x = d3.scaleBand()
	.rangeRound([0, width])
	.padding(0.1)
	.domain(myData.map(function (d) {
		return d.name;
	})
);

var y = d3.scaleLinear()
	.rangeRound([height , 0])
	.domain([0, 100 ]);

var svg = d3.select('#vis').append('svg');
svg.attr('width', width + margin.left + margin.right);
svg.attr('height', height + margin.top + margin.bottom + 100);
g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

g.append("g")
	.attr('class', 'x axis')
	.attr("transform", "translate(0," + height + ")")
	.call(d3.axisBottom(x))
	.style('opacity', 0)
	.selectAll("text")
	.attr("text-anchor", "end")
	.attr("transform", "rotate(-45)")

g.selectAll('.x.axis')
	.transition().duration(0)
	.style('opacity', 0.0);

g.append("g")
	.attr('class', 'y axis')
	.call(d3.axisLeft(y))
	.append("text")
	.attr("fill", "#000")
	.attr("transform", "rotate(-90)")
	.attr("y", 9)
	.attr("dy", "0.81em")
	.attr("text-anchor", "end")
	.text("Sensibility")

g.selectAll('.y.axis')
	.transition().duration(0)
	.style('opacity', 0.0);

g.selectAll(".bar")
	.data(myData)
	.enter().append("rect")
	.attr("class", "bar")
	.attr("x", function (d) { return x(d.name); })
	.attr("y", function (d) { return y(Number(d.value)); })
	.attr("width", x.bandwidth())
	.attr("height", function (d) { return height - y(Number(d.value)); })
	.attr("fill", function (d) { return d.color1; })
	.attr('opacity', 0);


var TITLES = [
	'Piglets antimicrobial resistance',
	'The piglet, an emblematic example',
	'From animals to humans',
	'',
	'',
	'',
	''
];


for(var i=0 ; i< NUMBER_OF_SLIDE ; i++) {
//  console.log("append text "+ 'slide-title slide-' + i + " , " + TITLES[i] );
	g.append('text')
		.attr('class', 'slide-title slide-' + i )
		.attr('x', width  / 2)
		.attr('y', height / 3)
		.text( TITLES[i] )

	let slideName = ".slide-" + i;
	g.selectAll( slideName )
		.transition().duration(0)
		.style('opacity', 0.0 );
}



function setHistogramVisibility( index ) {
	let opacity = index > 2 ? 1.0 : 0.0;
	let duration = index > 2 ? 600 :200;

	let cOpacity = g.selectAll('.bar').attr('opacity') ;

	if(index <= 2 ) {
		g.selectAll('.bar')
			.transition()
			.duration(duration)
			.attr('opacity', 0.0 );
	}

	g.selectAll('.x.axis')
		.transition().duration(duration)
		.style('opacity', opacity );

	g.selectAll('.y.axis')
		.transition().duration(duration)
		.style('opacity', opacity );

	if( index === 3 ) {
		g.selectAll('.bar').attr("fill", function (d) { return d.color1; } )
		g.selectAll('.bar').attr("opacity", function (d) { return 1.0; } )

	} else if ( index == 4 ) {
		g.selectAll('.bar').attr("fill", function (d) {
			return d.color1 ;
		} )
		g.selectAll('.bar').attr("opacity", function (d) {
			if( d.name == "Amoxicilline" ) { return 1.0 }
			else return 0.3;
		});

	} else if ( index == 5 ) {
		g.selectAll('.bar').attr("fill", function (d) {
			return d.color1 ;
		} )
		g.selectAll('.bar').attr("opacity", function (d) {
			if( d.name == "Tétracycline" ) { return 1.0 }
			else return 0.3;
		});

	} else if ( index == 6 ) {
		g.selectAll('.bar').attr("fill", function (d) { return d.color2; } )
		g.selectAll('.bar').attr("opacity", function (d) { return 1.0; } )
	}




}


setHistogramVisibility(0);

function switchToSlides( index ) {

	return function() {

		for( let i = 0 ; i < NUMBER_OF_SLIDE; i++ ) {
			let slideName = ".slide-" + i;
			let opacity = ( i === index )  ? 1.0 : 0.0;
			let duration =  ( i === index )  ? 600 : 100;
			g.selectAll( slideName )
				.transition().duration(duration )
				.style('opacity', opacity );

			let histoVisibility = true;
			setHistogramVisibility( index );

		}

	}

}


var activateFunctions = [];
for(var i=0; i< NUMBER_OF_SLIDE ; i ++) {
	activateFunctions[i] = switchToSlides(i);
}


var updateFunctions   = [];
for (var i = 0; i < 9; i++) {
	updateFunctions[i] = function () {};
}
updateFunctions[7] = function () {} ; //updateCough;


// ==================
//   slide selection
// ==================
var lastIndex = -1;
var activeIndex = 0;

var activate = function (index) {
	activeIndex = index;
	var sign = (activeIndex - lastIndex) < 0 ? -1 : 1;
	var scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
	scrolledSections.forEach(function (i) {
		activateFunctions[i]();
	});
	lastIndex = activeIndex;
};

var update = function (index, progress) {
	updateFunctions[index](progress);
};



// setup scroll functionality
var scroll = scroller()
	.container(d3.select('#graphic'));

// pass in .step selection as the steps
scroll(d3.selectAll('.step'));

// setup event handling
scroll.on('active', function (index) {

	// highlight current step text
	d3.selectAll('.step')
		.style('opacity', function (d, i) { return i === index ? 1 : 0.1; });

	// activate current section
	activate(index);
});

scroll.on('progress', function (index, progress) {
	update(index, progress);
});



