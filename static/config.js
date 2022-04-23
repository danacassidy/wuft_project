var config = {
    style: 'mapbox://styles/danacassidy/cl250vjo7000g14mn4aair6pl',
    accessToken: 'pk.eyJ1IjoiZGFuYWNhc3NpZHkiLCJhIjoiY2wxd3EweHByMDBvZTNrbWIxbWYwMHUzNSJ9.gSnbIiFFLkMUhhYmBrJhOw',
    showMarkers: true,
    markerColor: '#76a5ef',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true,

    chapters: [
        
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            description: "<p>A new, 261-page Department of Environmental Protection dam safety report brings new urgency to the decades-long battle over Rodman Dam. What was once a low-hazard dam has become dangerous with age. </p> As the dam turns 54, risk has surged: The failure analysis changed the dam risk level to from low to high hazard, meaning that death is a possibility.",
            location: {
                center: [-81.80642, 29.50876],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'locks_dam',
                    opacity: 0
                },
                 {
                layer: 'addresses',
                opacity: 0
                },
                {
                    layer:'background',
                    opacity:1
                },
                
            ],
            onChapterExit: [
                {
                   layer: 'heat_map_addresses',
                    opacity: 1
                },
                {
                    layer: 'locks_dam',
                    opacity: 0
                },
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            description: '<p>Rodman Dam was part of the early construction of the Cross Barge Florida Canal, a cut through peninsular Florida that  would have allowed ships to cross through an inland waterway. The project was halted by President Nixon in 1971. But the dam, popular with fishers, remains.</p><p>Science shows that removing it could restore 20 springs and 8,000 acres of flooded forest, and replenish six historic fish and shellfish species and more. </p>',
            location: {
                center: [-81.80642, 29.50876],
                zoom: 8,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [{
                layer: 'addresses',
                opacity: 0,
                },
                {
                    layer: 'locks_dam',
                    opacity: 0
                },
            {layer: 'heat_map_addresses',
            opacity: .75
        }],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            description: '<p>Despite the DEP report listing more than 530 homes downstream from the dam as at risk in a worst-case scenario, there has been no concerted effort to notify homeowners of the potential danger except for an emergency opt-in system that’s still being worked on. </p> <p>“There is evidence of probable loss of life resulting from a dam failure,” the report reads.</p>',
            location: {
                center: [-81.80642, 29.50876],
                zoom: 10,
                pitch: 5,
                bearing: 0,
                speed:2,
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'addresses',
                opacity: .8
                },
                {layer: 'heat_map_addresses',
                opacity: .3},
                {
                    layer: 'locks_dam',
                    opacity: 0
                },],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            description: '<p>Other remnants of the project, considered one of the largest unfinished public works projects in U.S. history:  Buckman Lock, Eureka Dam and Lock and the Inglis Lock, also used as recreation areas.</p> <p>The defunct locks often disrupt aquatic wildlife like alligators and manatees that are only able to pass through at certain times when they open.</p><p>If the dam were to be removed, the locks would go, too. </p>',
            location: {
                center: [-81.80642, 29.50876],
                zoom: 8,
                pitch: 60,
                bearing: -5,
                speed: 2, 
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'addresses',
                opacity: 0
                },
                {
                    layer: 'locks_dam',
                    opacity:1
                },
                {layer: 'heat_map_addresses',
                opacity: .3}],
            onChapterExit: [{
                layer: 'locks_dam',
                opacity: 0
            }]
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            description: 'The affected homes are in four Putnam County towns: Palatka, Crescent City, Satsuma, and Welaka. Families revel in their small, quiet fishing communities.',
            location: {
                center: [-81.74958102568239, 29.511059795972223],
                zoom: 12,
                pitch: 60,
                bearing: -45,
                speed: 2, 
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [,
                {layer: 'heat_map_addresses',
                opacity: .2},
                {
                    layer: 'addresses',
                    opacity: 1
                    },
                {
                    layer: 'locks_dam',
                    opacity: 0
                },],
            onChapterExit: []
        },
    ]
   
};
