import { AsyncStore } from 'subFramework'
import { makeObservable } from 'mobx'

class CasasStore extends AsyncStore {

    constructor() {
        super()
        this.makeObservables()
    }

    makeObservables() {
        makeObservable(this, {
          // observables
          // actions
        })
      }

export default CasasStore
           