import { observable, computed, action, decorate, runInAction } from 'mobx';
import { get, entries, remove } from 'mobx';
import * as firebaseService from './firebaseService';
import { v4 as uuid } from 'uuid';

export class Store {
	constructor() {
		this.activeUser = null;
		this.loading = false;
		this.authCheckComplete = false;
		this.items = new Map();
		this.initializationError = null;

		this.initializeStore().then(u => {
			this.activeUser = u;
			this.authCheckComplete = true;
		});


		/////////// Mock state for dev. time
		this.state = {
			Users: {
				myUid: 'myUid',
				friendUid: 'friendUid'
			},
			Lists: {
				myShopping1: {
					objectId: 'myShopping1',
					name: 'Harry\'s Shopping list',
					Items: [
						{
							name: 'Bananas',
							quantity: 5,
							unit: 'pc'
						}
					]
				},
				friendShopping1: {
					objectId: 'friendShopping1',
					name: 'Sally\'s Shopping list',
					Items: []
				},
				friendNeed1: {
					objectId: 'friendNeed1',
					name: 'Oliver\'s Shopping list',
					Items: []
				},
			},
		}
	}

	/**
	 * if we have an authenticated user then get all of the profile
	 * information from the database and associate it with the active
	 * user
	 * @param {*} _authUser
	 */
	handleAuthorizedUser = async _authUser => {
		if (_authUser) {
			let userAcctInfo = await firebaseService.getUserProfile();
			console.log('setting active user');
			this.activeUser = { ..._authUser, ...userAcctInfo };
		} else {
			this.activeUser = _authUser;
		}
		return this.activeUser;
	};

	/**
	 * check to see if we have a user before starting up
	 */
	async initializeStore() {
		return firebaseService
			.authCheck(this.handleAuthorizedUser)
			.then(_user => {
				return _user;
			})
			.catch(e => {
				return runInAction(() => {
					this.initializationError = e;
				});
			});
	}

	get doCheckAuth() {
		if (firebaseService.getCurrentUser()) {
			return this.activeUser;
		} else {
			return null;
		}
	}

	/**
	 * here we check to see if ionic saved a user for us
	 */
	get authenticatedUser() {
		return this.activeUser || null;
	}

	/**
	 * gets all of the items as an array from the map
	 */
	get itemEntries() {
		return entries(this.items);
	}

	/**
	 * get a specific item based on its key
	 * @param {*} _key
	 */
	itemByKey(_key) {
		return get(this.items, _key);
	}

	/**
	 * login using a username and password
	 */
	doLogin(_username, _password) {
		if (_username.length) {
			return firebaseService
				.loginWithEmail(_username, _password)
				.then(
					_result => {
						return true;
					},
					err => {
						console.log(err);
						return err;
					}
				)
				.catch(e => {
					console.log(e);
					return e;
				});
		}
	}

	/**
	 * login using facebook
	 */
	doFacebookLogin() {
		return firebaseService
			.loginWithFacebook()
			.then(
				_result => {
					return true;
				},
				err => {
					console.log(err);
					return err;
				}
			)
			.catch(e => {
				console.log(e);
				return e;
			});
	}

	/**
	 * login using google
	 */
	doGoogleLogin() {
		return firebaseService
			.loginWithGoogle()
			.then(
				_result => {
					return true;
				},
				err => {
					console.log(err);
					return err;
				}
			)
			.catch(e => {
				console.log(e);
				return e;
			});
	}

	/**
	 * create the user with the information and set the user object
	 */
	async doCreateUser(_params) {
		try {
			let newUser = await firebaseService.registerUser({
				email: _params.email,
				password: _params.password,
				firstName: _params.firstName,
				lastName: _params.lastName
			});
			return newUser;
		} catch (err) {
			console.error(err);
			// for (let e of err.details) {
			//   if (e === "conflict_email") {
			//     alert("Email already exists.");
			//   } else {
			//     // handle other errors
			//   }
			// }
		}
	}

	/**
	 * logout and remove the user...
	 */
	doLogout() {
		this.activeUser = null;
		return firebaseService.logOut();
	}

	/****************** CRUD *****************/

	/// Item
	async addItem(listId, item) {
		const newItem = item
		// we can only add items to our own lists
		if (!newItem.id) {
			newItem.id = uuid()
		}
		const currentUser = await firebaseService.getCurrentUserAsync()

		firebaseService.editItem(currentUser.uid, listId, newItem)
	}

	async editItem(listId, item) {
		// we can only edit our own items
		const currentUser = await firebaseService.getCurrentUserAsync()

		firebaseService.editItem(currentUser.uid, listId, item);
	}

	/**
	 *
	 * @param {String} id The id of the item to add
	 * @returns {Promise<boolean>}
	 */
	deleteItem(id) {
		return id
		// return firebaseService
		// 	.removeObjectFromCollection({ collection: 'Items', objectId: id })
		// 	.then(
		// 		_result => {
		// 			// create the user object based on the getData retrieved...
		// 			return runInAction(() => {
		// 				remove(this.items, id);
		// 				return true;
		// 			});
		// 		},
		// 		err => {
		// 			console.log(err);
		// 			return err;
		// 		}
		// 	)
		// 	.catch(e => {
		// 		console.log(e);
		// 		return e;
		// 	});
	}

	/************    Business functions    *************/

	async getMyCurrentShoppingList(getData) {
		const currentUser = await firebaseService.getCurrentUserAsync()
		return firebaseService.getFirstShoppingList(currentUser.uid)
	}

	async getMyCurrentShoppingListItems() {
		const currentUser = await firebaseService.getCurrentUserAsync()
		const currentShoppingList = await this.getMyCurrentShoppingList()

		return firebaseService.getListItems(currentUser.uid, currentShoppingList.id)
	}

	async getMyCurrentNeedList() {
		return this.state.Lists.friendNeed1

		// return this.findMyCurrentShoppingList(true)
	};

	async getMyCurrentNeedListItems(originListId = null) {
		return this.state.Lists.friendNeed1.Items
		
	}


	async getMyCurrentNeedListItems(uid, listId) {
		// TODO:
		return this.state.Lists.myShopping1.Items
	}
}

decorate(Store, {
	// OBSERVABLES
	activeUser: observable,
	loading: observable,
	authCheckComplete: observable,
	items: observable,
	initializationError: observable,

	// COMPUTED
	authenticatedUser: computed,
	doCheckAuth: computed,
	itemEntries: computed,

	// ACTIONS
	getMyCurrentShoppingListItems: action,
	getMyNeedLists: action,
	doCreateUser: action,
	doLogin: action,
	doFacebookLogin: action,
	doGoogleLogin: action,
	doLogout: action,
	loadData: action,
	itemByKey: action,
	getCurrentList: action,
	addItem: action,
	editItem: action,
	// deleteItem: action
});
