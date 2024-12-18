import styles from './Time.module.scss'

const Time =  ({time}) => {
    const msToTime = s =>  {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;
      
        return hrs + ':' + mins + ':' + secs + '.' + ms;
      }
    return (
        <div className={styles.time}>
            {msToTime(time)}
        </div>
        
    );
};

export default Time;