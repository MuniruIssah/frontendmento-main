import markWebber from '../images/avatar-mark-webber.webp'
import angelaGray from '../images/avatar-angela-gray.webp'
import jacobThompson from '../images/avatar-jacob-thompson.webp'
import rizkyHasanuddin from '../images/avatar-rizky-hasanuddin.webp'
import kimberlySmith from '../images/avatar-kimberly-smith.webp'
import nathanPeterson from '../images/avatar-nathan-peterson.webp'
import annaKim from '../images/avatar-anna-kim.webp'
import yourPic from '../images/image-chess.webp'

export const notifications=[
    {
        id:1,
        avatar:markWebber,
        user:'Mark Webber',
        action:'reaction',
        time:'1m ago',
        post:'My first tournament today!',
        read:false
    },
    {
        id:2,
        avatar:angelaGray,
        user:'Angela Gray',
        action:'follow',
        time:'5m ago',
        read:false
    },
    {
        id:3,
        avatar:jacobThompson,
        user:'Jacob Thompson',
        action:'group-join',
        group:'Chess Club',
        time:'1 day ago',
        read:false
    },
    {
        id:4,
        avatar:rizkyHasanuddin,
        user:'Rizky Hasanuddin',
        action:'message',
        message:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        time:'5 days ago',
        read:true
    },
    {
        id:5,
        avatar:kimberlySmith,
        user:'Kimberly Smith',
        action:'comment',
        preview:yourPic,
        time:'1 week ago',
        read:true
    },
    {
        id:6,
        avatar:nathanPeterson,
        user:'Nathan Peterson',
        action:'reaction',
        post:'5 end- game strategies to increase your win rate',
        time:'2 weeks ago',
        read:true
    },
    {
        id:7,
        avatar:annaKim,
        user:'Anna Kim',
        action:'group-exit',
        group:'Chess Club',
        time:'2 weeks ago',
        read:true
    },


]