import work from '../images/icon-work.svg'
import play from '../images/icon-play.svg'
import study from '../images/icon-study.svg'
import exercise from '../images/icon-exercise.svg'
import social from '../images/icon-social.svg'
import selfCare from '../images/icon-self-care.svg'

export const dummyTrackingStats=[
    {
        title:'Work',
        itemImage:work,
        timeframes: {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        },
        extraClasses:'bg-[#FF8C66]'
    },
    {
        title:'Play',
        itemImage:play,
        extraClasses:'bg-[#56C2E6]',
        timeframes: {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        title:'Study',
        itemImage:study,
        extraClasses:'bg-[#FF5C7C]',
        timeframes:{
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        title:'Exercise',
        itemImage:exercise,
        extraClasses:'bg-[#4ACF81]',
        timeframes: {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        title:'Social',
        itemImage:social,
        timeframes: {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        },
        extraClasses:'bg-[#7536D3]'
    },
    {
        title:'Self Care',
        itemImage:selfCare,
        extraClasses:'bg-[#F1C65B]',
        timeframes: {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    },
]

