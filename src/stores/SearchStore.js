import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { axiosError } from './Common.js';
import { membersStore } from './MembersStore.js';

export default class SearchStore {
  constructor() {
    makeAutoObservable(this);
  }

  searchRead(q) {
    const url = `/api/v1/search?q=${q}`;
    axios.get(url).then((response) => {
      console.log('Done searchRead', response);
      membersStore.members = response.data.members;
    }).catch((error) => {
      axiosError(error);
    });
  }
}

export const searchStore = new SearchStore();
