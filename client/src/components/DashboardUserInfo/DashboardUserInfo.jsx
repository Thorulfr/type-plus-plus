import React from 'react';
import { Link } from 'react-router-dom';
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar';

const DashboardUserInfo = ({ data, modalBio, image, setImage, refetch }) => {
    const level2 = 100;
    const level3 = 250;
    const level4 = 500;
    const level5 = 800;
    const level6 = 1200;
    const level7 = 1650;
    const level8 = 2100;
    const level9 = 2700;
    const level10 = 3200;

    let averageWPM;

    if (data.meScores.length !== 0) {
        let scoresArr = [];
        for (let i = 0; i < data.meScores.length; i++) {
            scoresArr.push(data.meScores[i].wpm);
        }
        const average = (array) =>
            scoresArr.reduce((a, b) => a + b) / scoresArr.length;
        averageWPM = average(scoresArr);
        averageWPM = Math.floor(averageWPM);
    }

    let userLevel = 1;
    let levelProgress;
    let totalXP = 0;
    if (data) {
        data.meBadges.badges.map((badge) => {
            totalXP += badge.xp;
            return totalXP;
        });
    }

    if (totalXP < level2) {
        levelProgress = (totalXP / level2) * 100;
    } else if (totalXP >= level2 && totalXP < level3) {
        userLevel = 2;
        let diff = level3 - level2;
        let diff2 = totalXP - level2;
        levelProgress = (diff2 / diff) * 100;
    } else if (totalXP >= level3 && totalXP < level4) {
        userLevel = 3;
        let diff = level4 - level3;
        let diff2 = totalXP - level3;
        levelProgress = (diff2 / diff) * 100;
    } else if (totalXP >= level4 && totalXP < level5) {
        userLevel = 4;
        let diff = level5 - level4;
        let diff2 = totalXP - level4;
        levelProgress = (diff2 / diff) * 100;
    } else if (totalXP >= level5 && totalXP < level6) {
        userLevel = 5;
        let diff = level6 - level5;
        let diff2 = totalXP - level5;
        levelProgress = (diff2 / diff) * 100;
    } else if (totalXP >= level6 && totalXP < level7) {
        userLevel = 6;
        let diff = level7 - level6;
        let diff2 = totalXP - level6;
        levelProgress = (diff2 / diff) * 100;
    } else if (totalXP >= level7 && totalXP < level8) {
        userLevel = 7;
        let diff = level8 - level7;
        let diff2 = totalXP - level7;
        levelProgress = (diff2 / diff) * 100;
    } else if (totalXP >= level8 && totalXP < level9) {
        userLevel = 8;
        let diff = level9 - level8;
        let diff2 = totalXP - level8;
        levelProgress = (diff2 / diff) * 100;
    } else if (totalXP >= level9 && totalXP < level10) {
        userLevel = 9;
        let diff = level10 - level9;
        let diff2 = totalXP - level9;
        levelProgress = (diff2 / diff) * 100;
    } else if (totalXP >= level10) {
        userLevel = 10;
        levelProgress = null;
    }

    let levelIcon;
    switch (userLevel) {
        case 1:
            levelIcon = '/assets/level-icons/level-1.png';
            break;
        case 2:
            levelIcon = '/assets/level-icons/level-2.png';
            break;
        case 3:
            levelIcon = '/assets/level-icons/level-3.png';
            break;
        case 4:
            levelIcon = '/assets/level-icons/level-4.png';
            break;
        case 5:
            levelIcon = '/assets/level-icons/level-5.png';
            break;
        case 6:
            levelIcon = '/assets/level-icons/level-6.png';
            break;
        case 7:
            levelIcon = '/assets/level-icons/level-7.png';
            break;
        case 8:
            levelIcon = '/assets/level-icons/level-8.png';
            break;
        case 9:
            levelIcon = '/assets/level-icons/level-9.png';
            break;
        case 10:
            levelIcon = '/assets/level-icons/level-10.png';
            break;
        default:
            levelIcon = '/assets/level-icons/level-1.png';
            break;
    }

    // refetch();

    return (
        <section className="w-[200px]">
            <CircularProgressbarWithChildren
                value={levelProgress}
                styles={buildStyles({
                    pathColor: '#35a2eb',
                    trailColor: '#94cbf1',
                })}
            >
                <img
                    className="rounded-full w-[171px] h-[171px] object-cover"
                    src={image}
                    alt="User avatar"
                ></img>
                <img
                    className="w-[64px] h-[64px] absolute top-[158px]"
                    src={levelIcon}
                    alt="level icon"
                ></img>
            </CircularProgressbarWithChildren>

            <div className="mt-5">
                <h3 className="text-2xl text-center">{data.me.username}</h3>
            </div>
            <div className="mt-2">
                {!modalBio && <p className="text-center">{data.me.bio}</p>}
                {modalBio && <p className="text-center">{modalBio}</p>}
            </div>
            <div className="mt-2">
                {data.meScores[0] && (
                    <p className="text-center mt-2">
                        Highest WPM: {data.meScores[0].wpm}
                    </p>
                )}
                {!data.meScores[0] && (
                    <Link to="/">
                        <p className="hover:text-theme-red text-center italic transition-all duration-300">
                            Take a few tests to show your scores!
                        </p>
                    </Link>
                )}
                {data.meScores[0] && (
                    <p className="text-center mt-2">
                        Average WPM: {averageWPM}{' '}
                    </p>
                )}
                {data.meScores[0] && (
                    <p className="text-center mt-2">
                        Games Played: {data.meScores.length}{' '}
                    </p>
                )}
            </div>
            <div className="mt-2">
                {data.me.location && (
                    <p className="text-center">Location: {data.me.location} </p>
                )}
                {!data.me.location && (
                    <p className="text-center">No location set</p>
                )}
            </div>
        </section>
    );
};

export default DashboardUserInfo;
