import Button from "../button/Button";
import Grid from "../grid/Grid";
import styles from "./CoverPage.module.css";
import { useState } from "react";
import generateLoshuGrid from "./grid";

const CoverPage = () => {
  const [grid, setGrid] = useState([
    [[4, 0], [9, 0], [2, 0]],
    [[3, 0], [5, 0], [7, 0]],
    [[8, 0], [1, 0], [6, 0]],
  ]);
  const [gridStatus , setGridStatus] = useState({
    isGoldenYog:false,
    isSilverYog:false,

    isMentalPlane :false,
    isEmotionalPlane :false,
    isPracticalPlane :false,
  
    isThoughtPlane :false,
    isWillPlane :false,
    isActionPlane :false
  
  });
  const [driverNumber,setDriverNumber] = useState();
  const [destinyNumber,setDestinyNumber] = useState();
  const [kuaNumber,setKuaNumber] = useState();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('M'); // Default to Male
  const [missingNumber,setMissingNumber] = useState([]);
  const [mouseEnterOnPanel,setMouseEnterOnPanel] = useState({type:null,status:false});
  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (!dob) {
      alert("Please enter a valid date of birth!");
      return;
    }

    // Generate Loshu Grid
    const loshuGrid=generateLoshuGrid(dob, gender);
    setMissingNumber(loshuGrid.getMissingNumber);
    setGrid(loshuGrid.grid);
    setGridStatus(loshuGrid.getMeatInfo);
    setDriverNumber(loshuGrid.driverNumber);
    setDestinyNumber(loshuGrid.destinyNumber);
    setKuaNumber(loshuGrid.kuaNumber);

  };

  const handleMouseEnterOnPanel = (type)=>{;
    setMouseEnterOnPanel({type:type,status:true});
  }

  const handleMouseExitOnPanel = ()=>{
    setMouseEnterOnPanel({type:null,status:false});
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <p className={styles.title}>
            Get Free <span>Numerology</span> Grid
          </p>
          <form className={styles.form} onSubmit={handleOnSubmit}>
            <div className={styles['input-g1']}>
              <input
                type="text"
                className={styles.inputs}
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                className={styles.inputs}
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              type="date"
              className={styles.inputs}
              placeholder="Enter Date Of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />

            <div className={styles.genderInput}>
              <div className={styles['r-input']}>
                <input
                  type="radio"
                  name="gender"
                  value="M"
                  checked={gender === 'M'}
                  onChange={() => setGender('M')}
                />
                Male
              </div>

              <div className={styles['r-input']}>
                <input
                  type="radio"
                  name="gender"
                  value="F"
                  checked={gender === 'F'}
                  onChange={() => setGender('F')}
                />
                Female
              </div>
            </div>
            <Button className={styles.Button}>Generate</Button>
          </form>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.headerContainer}>
            <p>For {dob || "N/A"}</p>
          </div>
          <div className={styles.containers}>
            <Grid grid={grid} gridStatus={gridStatus} panelStatus = {mouseEnterOnPanel}/>
            <div className={styles.infoContainer}>
              <p>What Your Grid Tells?</p>
              <div className={styles['r-info-container']}>
                <div className={styles['info-card-container']}>
                {gridStatus.isGoldenYog && <div className={[styles['info-card'], styles['golden'] ].join(' ') } onMouseEnter={()=>handleMouseEnterOnPanel('golden')} onMouseLeave={() => handleMouseExitOnPanel()} >Golden Yog Found</div>}
                {gridStatus.isSilverYog && <div className={[styles['info-card'] , styles['silver']].join(' ')} onMouseEnter={()=>handleMouseEnterOnPanel('silver')} onMouseLeave={() => handleMouseExitOnPanel()}>Silver Yog Found</div>}
                
                {gridStatus.isMentalPlane && <div className={[styles['info-card'] , styles['mental']].join(' ')} onMouseEnter={()=>handleMouseEnterOnPanel('mental')} onMouseLeave={() => handleMouseExitOnPanel()}>Mental Plane</div>}
                {gridStatus.isEmotionalPlane && <div className={[styles['info-card'] , styles['emotional']].join(' ')} onMouseEnter={()=>handleMouseEnterOnPanel('emotional')} onMouseLeave={() => handleMouseExitOnPanel()}>Emotional Plane</div>}
                {gridStatus.isPracticalPlane && <div className={[styles['info-card'] , styles['practical']].join(' ')} onMouseEnter={()=>handleMouseEnterOnPanel('practical')} onMouseLeave={() => handleMouseExitOnPanel()}>Practical Plane</div>}
                
                {gridStatus.isThoughtPlane && <div className={[styles['info-card'] , styles['thought']].join(' ')} onMouseEnter={()=>handleMouseEnterOnPanel('thought')} onMouseLeave={() => handleMouseExitOnPanel()}>Thought Plane</div>}
                {gridStatus.isWillPlane && <div className={[styles['info-card'] , styles['will']].join(' ')} onMouseEnter={()=>handleMouseEnterOnPanel('will')} onMouseLeave={() => handleMouseExitOnPanel()}>Will Plane</div>}
                {gridStatus.isActionPlane && <div className={[styles['info-card'] , styles['action']].join(' ')} onMouseEnter={()=>handleMouseEnterOnPanel('action')} onMouseLeave={() => handleMouseExitOnPanel()}>Action Plane</div>}
                </div>
               {missingNumber.length>0 && <div>
                <p>Missing Numbers</p>
                <div className={styles['missing-number-container']}>
                  {missingNumber.map((number)=>(
                      <div className={styles['number']} key={number}>{number}</div>
                  ))}
                  </div>
                </div>
              }

               {driverNumber && <div className={styles['number-section']}>
                  <p>Driver Number</p> 
                  <div className={styles['number-oth']} key={driverNumber}>{driverNumber}</div>
               </div> }
               {destinyNumber && <div className={styles['number-section']}>
                  <p>Destiny Number</p> 
                  <div className={styles['number-oth']} key={destinyNumber}>{destinyNumber}</div>
               </div> }
               {kuaNumber && <div className={styles['number-section']}>
                  <p>Kua Number</p> 
                  <div className={styles['number-oth']} key={kuaNumber}>{kuaNumber}</div>
               </div> }
               
              </div>
            </div>
            <div className={styles.footerContainer}>
              <p>What Your Name Tells?</p>
              <div className={styles.info}>
                <p>
                  {firstName} {lastName}
                </p>
                <div className={styles.tags}>
                  <div className={styles.tag}>Healer</div>
                  <div className={styles.tag}>Teacher</div>
                  <div className={styles.tag}>Counselor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverPage;
