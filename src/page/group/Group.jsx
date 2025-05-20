import React from 'react';
import "./group.css";
import PlusIcon from '../../assets/icon/plusIcon/PlusIcon';
import LightLockIcon from '../../assets/icon/light_lock/LightLockIcon';

const groupData = [
  { title: "Birras y Chess", description: "Torneos de ajedrez presenciales", privacy: "privado", members: 10, events: 1500 },
  { title: "Coding Meetup", description: "Encuentro de desarrolladores", privacy: "público", members: 25, events: 500 },
  { title: "Book Club", description: "Discusión de libros mensuales", privacy: "privado", members: 15, events: 300 },
  { title: "Hiking Group", description: "Excursiones de senderismo semanales", privacy: "público", members: 30, events: 750 },
  { title: "Language Exchange", description: "Práctica de idiomas", privacy: "público", members: 20, events: 400 },
];

function Group() {
  return (
    <div className='group'>
      <div className='group_header'>
        <h5 className='medium'>Group</h5>
        <div className="add">
          <PlusIcon />
        </div>
      </div>
      {groupData.map((group, index) => (
        <div key={index} className='border_gradient'>
          <div className='group_card'>
            <div className='card_top'>
              <div className='card_text'>
                <p className="title1">{group.title}</p>
                <p>{group.description}</p>
              </div>
              <span className="privacy caption ">{group.privacy}</span>
            </div>
            <div className='card_bottom'>
              <div className="card_tags caption">
                <span>{group.members} miembros</span>
                <span>{group.events} eventos</span>
              </div>
              <div className="accessIcon">
                <LightLockIcon />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Group;
