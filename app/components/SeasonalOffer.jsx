import BlackFriday from "./BlackFriday";
import MerryChristmas from "./MerryChristmas";
import StandardOffer from "./StandardOffer";

export default function SeasonalOffer()
{

    const todayDate = new Date();
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth

    const currentMonth = todayDate.getMonth() + 1;
    console.log( currentMonth )
    /* THE EXAMPLE LISTED BELOW ONLY WORKS IF THE CURRENT MONTH IS 11 - NOVEMBER */
    // + 1  = nov (11)
    // + 0  = out (10)
    // -1  = set (9)
    // -2  = aug (8)
    // -3  = july (7)
    // -4  = june (6)
    // -5  = may (5)
    // -6  = april (4)
    // -7  = march (3)
    // -8  = feb (2)
    // -9  = jan (1)

    console.log( currentMonth );

    return (
        <>
            <div className={currentMonth <= 10 ? 'block' : 'hidden'}>
                {currentMonth === 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10 ? <StandardOffer /> : ''}
            </div>

            <div className={currentMonth !== 11 ? 'hidden' : 'block'}>
                {currentMonth === 11 ? <BlackFriday /> : ''}
            </div>

            <div className={currentMonth !== 12 ? 'hidden' : 'block'}>
                {currentMonth === 12 ? <MerryChristmas /> : ''}
            </div>
        </>
    )
}