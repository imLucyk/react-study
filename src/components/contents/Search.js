import { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { useLocation, useNavigate } from 'react-router-dom';

function Search(props) {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location)
  const searchParams = new URLSearchParams(location.search);
  const spSearch = searchParams.get('q') || '';
  const { membersStore, searchStore } = props;
  const { members } = membersStore;
  const [ q, setQ ] = useState('');
  console.log(q);
  const searchRead = (event) => {
    event.preventDefault();
    // searchStore.searchRead(q);
    navigate(`/search?q=${q}`);
  };
  // useEffect(() => {
  //   searchStore.searchRead('');
  // }, [searchStore]);
  useEffect(() => {
    searchStore.searchRead(spSearch);
    setQ(spSearch);
  }, [searchStore, spSearch]);
  return (
    <div>
      <h3>Search</h3>
      <hr className="d-block" />
      <div>
        <form onSubmit={(event) => {searchRead(event)}}>
          <input
            type="text" placeholder="Search"
            value={q}
            onChange={event => {setQ(event.target.value)}}
          />
          <button>Search</button>
        </form>
      </div>
      <hr className="d-block" />
      <div>
        <table className="table-search">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.age}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default inject('membersStore', 'searchStore')(observer(Search));
