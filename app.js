const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
        name: 'Jimbo',
        picture: '🤵',
        location: '🏤'
    },
    {
        name: 'Sammy',
        picture: '🙆‍♀️',
        location: '🏤'
    },
    {
        name: 'Michael',
        picture: '👷',
        location: '🏤'
    },
    {
        name: 'Robert',
        picture: '👷',
        location: '🏥'
    },
    {
        name: 'Terry',
        picture: '🤴',
        location: '🏥',
    },
    {
        name: 'Bill',
        picture: '🕵️',
        location: '🏥',
    },
    {
        name: 'Marie',
        picture: '👩‍🍳',
        location: '🏭',
    },
    {
        name: 'Mykeal',
        picture: '💂',
        location: '🏭',
    },
    {
        name: 'Phil',
        picture: '🧜‍♂️',
        location: '🏭',
    },
    {
        name: 'Wilson',
        picture: '🏐',
        location: '🏢',
    },
    {
        name: 'Wendy',
        picture: '👩‍⚕️',
        location: '🏢',
    },
    {
        name: 'Jeremy',
        picture: '🦹',
        location: '🏢',
    }
]

function drawTown(){
    locations.forEach(location =>{
        let group = people.filter(person => person.location == location)
        let groupPics = group.map(group => group.picture)
        document.getElementById(location).innerText = groupPics.join(' ')
    })
}

function batAttack(local){
    group = people.filter(person => person.location == local)
    group.forEach(person => person.picture = '🦇')
    
    checkVictory()
    movement()

}

function movement(){
    group = people.filter(person => person.picture != '🦇')
    group.forEach(person => person.location = locations[Math.floor(Math.random() * locations.length)])
    drawTown()
}

function checkVictory(){
    let bats = people.filter(person => person.picture == '🦇')
    if(bats.length == people.length){
        window.alert('Victory!')
        window.close()
    }
}

drawTown()