SLIDES.push(
{
	chapter: "Sandbox",
	clear:true,

	add:[

		// The fullscreen simulation
		{
			type:"sim",
			x:0, y:0,
			fullscreen: true,
			network: {
				"contagion":0.60,
				"peeps":[[506,195,3],[321,120,2],[424,094,1],[200,347,0],[121,250,0],[352,320,0],[145,134,0]],
				"connections":[[0,1,0],[1,2,0],[4,5,0]]
			},
			options:{
				infectedFrame: 3,
				scale: 1,
				_wisdom: true
			}
		},

		// The Sandbox UI
		{
			type:"box",
			x:0, y:0,
			sandbox:false
		},

		// Simulation UI
		{
			type:"box",
			x:35, y:5,
			sim_ui:"blue"
		}


	]

}
);
