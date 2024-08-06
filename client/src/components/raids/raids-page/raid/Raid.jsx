import { Link } from 'react-router-dom'

export default function Raid({data}) {
  return (
    <>
      <li className='raid'>
        <h2 className='location'>{data.location}</h2>
        <div className="raid-info">
          <p className='time'>Start at: <span>{data.start}</span></p>
          <p className="level">Level: <span>{data.level}</span></p>
          <div className="buttons">
            <Link to={`/raids/${data._id}`}>Join</Link>
            <Link to={`/raid/details/${data._id}`}>Details</Link>
          </div>
        </div>
      </li>
    </>
  )
}