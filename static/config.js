var config = {
    style: 'mapbox://styles/danacassidy/cl250vjo7000g14mn4aair6pl',
    accessToken: 'pk.eyJ1IjoiZGFuYWNhc3NpZHkiLCJhIjoiY2wxd3EweHByMDBvZTNrbWIxbWYwMHUzNSJ9.gSnbIiFFLkMUhhYmBrJhOw',
    showMarkers: true,
    markerColor: '#3FB1CE',
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
            title: 'Display Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
                layer: 'addresses',
                opacity: 0
                },
                {
                    layer:'background',
                    opacity:1
                },
                {
                    layer: 'locks_dam',
                    opacity: 0
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
            title: 'Second Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
            title: 'Third Title',
            description: 'Copy these sections to add to your story.',
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
            title: 'Third Title',
            description: 'Copy these sections to add to your story.',
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
            title: 'Third Title',
            description: 'Copy these sections to add to your story.',
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
