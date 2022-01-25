import { configure, makeAutoObservable } from 'mobx';

configure({
  enforceActions: 'never',
  useProxies: 'never'
});

export default class MembersStore {
  constructor() {
    makeAutoObservable(this);
  }

  members = [{
    name: '홍길동',
    age: 20
  }, {
    name: '춘향이',
    age: 16
  }];
  member = {
    name: '',
    age: ''
  };

  membersCreate() {
    this.members.push({
      name: this.member.name,
      age: this.member.age
    });
    console.log('Done membersCreate', this.members);
  }
  
  membersRead() {
    // this.members = [{
    //   name: '홍길동',
    //   age: 20
    // }, {
    //   name: '춘향이',
    //   age: 16
    // }];
    console.log('Done membersRead', this.members);
  }
  
  membersDelete(index) {
    this.members.splice(index, 1);
    console.log('Done membersDelete', this.members);
  }
}

export const membersStore = new MembersStore();
