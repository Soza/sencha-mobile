/**
 * <p>
 * 
 * Prototype application for HSCC. The idea behind developing this mock up is to provide visual aspect 
 * of top five short-listed features that are envisioned to be part of the new mobile application.
 * 
 * <b>This mock-up comes with following features:</b>
 * 
 * <li>Quick RSS/Blog feed view</li>
 * <li>Video tab</li>
 * <li>Mapping Widget that interacts with <a href="http://locator.aids.gov/data">www.aids.gov</a> webservices API</li>
 * <li>Mapping List that interacts with <a href="http://locator.aids.gov/data">www.aids.gov</a> webservices API</li>
 * <li>etc.</li>
 * 
 * </p>
 * 
 * @author Sabby Anandan 
 * @return {TypeName} 
 */
var App = new Ext.Application(
		{

			// Application Name
			name : 'HSCCPrototypeApp',
			useLoadMask : true,
			launch : function() {

				// Clean up local storage cache
			window.localStorage.clear();

			// Mock Data - feeds
			var loadMockData = function() {

				var HSCCPrototypeStore = HSCCPrototypeApp.views.HSCCPrototypeList.getStore();
				var now = new Date();
				var noteId = now.getTime() + 1;

				var mockFact = Ext.ModelMgr
						.create(
								{
									id : noteId,
									date : now,
									title : 'What is STD?',
									narrative : 'To understand what HIV is, let’s break it down:'
											+ 'H – Human – This particular virus can only infect human beings.'
											+ 'I – Immunodeficiency – HIV weakens your immune system by destroying important cells that fight disease '
											+ 'and infection. A "deficient" immune system cant protect you.'
											+ 'V – Virus – A virus can only reproduce itself by taking over a cell in the body of its host.'
								}, 'Fact');
				HSCCPrototypeStore.add(mockFact);

				now = new Date();
				noteId = now.getTime() + 2;
				mockFact = Ext.ModelMgr
						.create(
								{
									id : noteId,
									date : now,
									title : 'Prevention Measures',
									narrative : 'Know your own HIV status and your partner’s too' + 'Use condoms, correctly and consistently' + 'Limit your number of sexual partners'
								}, 'Fact');
				HSCCPrototypeStore.add(mockFact);

				now = new Date();
				noteId = now.getTime() + 3;
				mockFact = Ext.ModelMgr
						.create(
								{
									id : noteId,
									date : now,
									title : 'Signs & Symptoms',
									narrative : 'Many people who are HIV-positive do not have symptoms of HIV infection. ' + 'Often people only begin to feel sick when they progress toward AIDS (Acquired Immunodeficiency Syndrome).' + ' Sometimes people living with HIV go through periods of being sick and then feel fine.'
								}, 'Fact');
				HSCCPrototypeStore.add(mockFact);

				now = new Date();
				noteId = now.getTime() + 4;
				mockFact = Ext.ModelMgr
						.create(
								{
									id : noteId,
									date : now,
									title : 'Where Can I Get an HIV Test?',
									narrative : 'An HIV test looks for signs of HIV in your body. When you get tested for HIV, ' + 'you will usually give a sample of blood, but there are other kinds of HIV tests that use urine' + ' or a swab of fluids from your mouth instead. Some tests take a few days for results, but' + ' rapid HIV tests can give results in about 20 minutes.'
								}, 'Fact');
				HSCCPrototypeStore.add(mockFact);

				now = new Date();
				noteId = now.getTime() + 5;
				mockFact = Ext.ModelMgr
						.create(
								{
									id : noteId,
									date : now,
									title : 'U.S. Statistics',
									narrative : 'The first cases of what would later become known as AIDS were '
											+ 'reported in the United States in June of 1981. Since then, 1.7 million people in the U.S.'
											+ ' are estimated to have been infected with HIV, including over 619,000 who have already died'
											+ ' and approximately 1.2 million (1,178,350) adults and adolescents who were living with HIV '
											+ 'infection at the end of 2008, the most recent year for which national prevalence estimates are available. '
								}, 'Fact');
				HSCCPrototypeStore.add(mockFact);

				now = new Date();
				noteId = now.getTime() + 6;
				mockFact = Ext.ModelMgr.create( {
					id : noteId,
					date : now,
					title : 'Global Statistics',
					narrative : '33.4 million are currently living with HIV/AIDS. '
							+ 'In 2008, 2 million people died due to HIV/AIDS, and another 2.7 million '
							+ 'were newly infected. Despite these challenges, there have been successes and '
							+ 'promising signs. New global efforts have been mounted to address the epidemic, '
							+ 'particularly in the last decade. Prevention has helped to reduce HIV prevalence '
							+ 'rates in a small but growing number of countries and new HIV infections are '
							+ 'believed to be on the decline. In addition, the number of people with HIV '
							+ 'receiving treatment in resource poor countries has increased '
							+ '10-fold since 2002, reaching an estimated 4 million by 2008.'
				}, 'Fact');
				HSCCPrototypeStore.add(mockFact);

				now = new Date();
				noteId = now.getTime() + 7;
				mockFact = Ext.ModelMgr
						.create(
								{
									id : noteId,
									date : now,
									title : 'Common Myths & Misunderstandings',
									narrative : 'There are many myths about HIV /AIDS. Most of these myths are based on ' + 'incorrect information or lack of knowledge about HIV/AIDS—and some are related to ' + 'the stigma that is often attached to HIV.'
								}, 'Fact');
				HSCCPrototypeStore.add(mockFact);

				now = new Date();
				noteId = now.getTime() + 8;
				mockFact = Ext.ModelMgr
						.create(
								{
									id : noteId,
									date : now,
									title : 'What Are Immunizations?',
									narrative : 'Immunizations (sometimes referred to as “vaccines”) provide immunity against ' + 'particular diseases. “Immunity” means that your immune system has developed a way of ' + 'protecting you from a specific disease by creating antibodies to that disease.'
								}, 'Fact');
				HSCCPrototypeStore.add(mockFact);

				now = new Date();
				noteId = now.getTime() + 9;
				mockFact = Ext.ModelMgr
						.create(
								{
									id : noteId,
									date : now,
									title : 'Treatment Adherence',
									narrative : '“Medication adherence” means taking your HIV medications when and how you are '
											+ 'supposed to take them. It can be one of the most difficult aspects of living with HIV/AIDS.'
											+ 'For some people, taking their meds every day reminds them of the social and the emotional '
											+ 'issues connected to HIV/AIDS, so they avoid it. It doesn’t have to be that way for you '
											+ 'because there are tips and tools that can help you take your meds when and how you need to be taking them.'
								}, 'Fact');
				HSCCPrototypeStore.add(mockFact);

				HSCCPrototypeStore.sync();

			}

			// Google Map API for Location Based Services
			var position = new google.maps.LatLng(40.443269, -79.954872), //Near CMU

			// Regular information window initilization
			infowindow = new google.maps.InfoWindow( {
				content : 'Sencha Touch HQ'
			}),

			// Tracking Marker Image
			image = new google.maps.MarkerImage('images/point.png', new google.maps.Size(32, 31), new google.maps.Point(0, 0),
					new google.maps.Point(16, 31)),

			// Tracking Marker Image Shadow
			shadow = new google.maps.MarkerImage('images/shadow.png', new google.maps.Size(64, 52),
					new google.maps.Point(0, 0), new google.maps.Point(-5, 42)),

			// Tracking button Creation
			trackingButton = Ext.create( {
				xtype : 'button',
				iconMask : true,
				iconCls : 'locate'
			});

			/** Model Objects - Start */
			// Create Model Binding for Feeds
			Ext.regModel('Fact', {
				idProperty : 'id',
				fields : [ {
					name : 'id',
					type : 'int'
				}, {
					name : 'date',
					type : 'date',
					dateFormat : 'c'
				}, {
					name : 'title',
					type : 'string'
				}, {
					name : 'narrative',
					type : 'string'
				} ],
				validations : [ {
					type : 'presence',
					field : 'id'
				}, {
					type : 'presence',
					field : 'title',
					message : 'Please enter a title for this fact.'
				} ]
			});

			// Create Model Binding for Testing Centers
			Ext.regModel('CenterInfo', {
				idProperty : 'id',
				fields : [ {
					name : 'id',
					type : 'int'
				}, {
					name : 'name',
					type : 'string'
				}, {
					name : 'stAdd1',
					type : 'string'
				}, {
					name : 'stAdd2',
					type : 'string'
				}, {
					name : 'city',
					type : 'string'
				}, {
					name : 'state',
					type : 'string'
				}, {
					name : 'country',
					type : 'string'
				}, {
					name : 'zip',
					type : 'string'
				}, {
					name : 'phone',
					type : 'string'
				}, {
					name : 'date',
					type : 'date',
					dateFormat : 'c'
				} ]
			});
			/** Model Objects - End */

			/** Local Cache Objects - Start */
			// Local cache storgae for feeds
			Ext.regStore('HSCCPrototypeStore', {
				model : 'Fact',
				sorters : [ {
					property : 'date',
					direction : 'ASC'
				} ],
				proxy : {
					type : 'localstorage',
					id : 'HSCCPrototype-app-store'
				},
				getGroupString : function(record) {
					if (record && record.data.date) {
						return record.get('date').toDateString();
					} else {
						return '';
					}
				}
			});

			// Local cache storgae for testing centers
			Ext.regStore('HSCCPrototypeCenterStore', {
				model : 'CenterInfo',
				sorters : [ {
					property : 'name',
					direction : 'ASC'
				} ],
				proxy : {
					type : 'localstorage',
					id : 'HSCCPrototype-app-store-centers'
				},
				grouper : {
					groupFn : function(record) {
						if (record && record.data.name) {
							return record.get('name').substr(0, 1);
						} else {
							return '';
						}
					},
					sortProperty : 'name'
				},
				getGroupString : function(record) {
					if (record && record.data.date) {
						return record.get('date').toDateString();
					} else {
						return '';
					}
				}
			});
			/** Local Cache Objects - End */

			/** Toolbar Objects - Start */
			// Toolbar for Map window
			toolbar = new Ext.Toolbar( {
				dock : 'top',
				xtype : 'toolbar',
				ui : 'light',
				defaults : {
					iconMask : true
				},
				items : [
						{
							position : position,
							iconCls : 'home',
							handler : function() {
								HSCCPrototypeApp.views.HSCCPrototypeHomeContainer.setActiveItem(
										'HSCCPrototypeListContainer', {
											type : 'slide',
											direction : 'right'
										});
							}
						},
						{
							iconCls : 'maps',
							handler : function() {
								HSCCPrototypeApp.views.HSCCPrototypeHomeContainer.setActiveItem(
										'HSCCPrototypeMapsContainer', {
											type : 'slide',
											direction : 'right'
										});
							}
						},
						{
							iconMask : true,
							iconCls : 'organize',
							handler : function() {
								HSCCPrototypeApp.views.HSCCPrototypeHomeContainer.setActiveItem(
										'HSCCPrototypeMapListContainer', {
											type : 'slide',
											direction : 'right'
										});
							}
						} ]
			});

			// Toolbar for Map list window
			testingCenterListToolBar = new Ext.Toolbar( {
				dock : 'top',
				xtype : 'toolbar',
				ui : 'light',
				defaults : {
					iconMask : true
				},
				items : [
						{
							position : position,
							iconCls : 'home',
							handler : function() {
								HSCCPrototypeApp.views.HSCCPrototypeHomeContainer.setActiveItem(
										'HSCCPrototypeListContainer', {
											type : 'slide',
											direction : 'left'
										});
							}
						},
						{
							iconMask : true,
							iconCls : 'organize',
							handler : function() {
								HSCCPrototypeApp.views.HSCCPrototypeHomeContainer.setActiveItem(
										'HSCCPrototypeMapListContainer', {
											type : 'slide',
											direction : 'right'
										});
							}
						} ]
			});

			// Bottom Tool Bar (HSCCPrototype Editor Page)
			HSCCPrototypeApp.views.noteEditorBottomToolbar = new Ext.Toolbar( {
				dock : 'bottom',
				items : [ {
					xtype : 'spacer'
				}, {
					iconCls : 'trash',
					iconMask : true,
					handler : function() {

						var currentNote = HSCCPrototypeApp.views.noteEditor.getRecord();
						var HSCCPrototypeStore = HSCCPrototypeApp.views.HSCCPrototypeList.getStore();
						if (HSCCPrototypeStore.findRecord('id', currentNote.data.id)) {
							HSCCPrototypeStore.remove(currentNote);
						}
						HSCCPrototypeStore.sync();
						HSCCPrototypeApp.views.HSCCPrototypeList.refresh();
						HSCCPrototypeApp.views.HSCCPrototypeHomeContainer.setActiveItem('HSCCPrototypeListContainer', {
							type : 'slide',
							direction : 'right'
						});
					}
				} ]
			});

			// Bottom Tool Bar (HSCCPrototype Home Page)
			HSCCPrototypeApp.views.noteEditorBottomToolbarHOME = new Ext.Toolbar( {
				dock : 'bottom',
				items : [
						{
							xtype : 'spacer'
						},
						{
							iconCls : 'maps',
							iconMask : true,
							handler : function() {
								HSCCPrototypeApp.views.HSCCPrototypeHomeContainer.setActiveItem(
										'HSCCPrototypeVideoContainer', {
											type : 'slide',
											direction : 'right'
										});
							}
						},
						{
							xtype : 'spacer'
						},
						{
							iconCls : 'star',
							iconMask : true,
							handler : function() {
								Ext.Msg.alert('Saved!', 'Your Feed Bookmarked Successfully.');
								return;
							}
						},
						{
							xtype : 'spacer'
						},
						{
							iconCls : 'locate',
							iconMask : true,
							handler : function() {
								HSCCPrototypeApp.views.HSCCPrototypeHomeContainer.setActiveItem(
										'HSCCPrototypeMapsContainer', {
											type : 'slide',
											direction : 'right'
										});
							}
						}, {
							xtype : 'spacer'
						}, {
							iconCls : 'search',
							iconMask : true,
							handler : function() {

							}
						} ]
			});

			/** Toolbar Objects - End */

			/** Sections/Facelets/Modules - Start */
			// Create HSCCPrototype editor
			HSCCPrototypeApp.views.noteEditorTopToolbar = new Ext.Toolbar( {
				title : 'Edit Fact',
				items : [ {
					text : 'Home',
					ui : 'back',
					handler : function() {
						HSCCPrototypeApp.views.HSCCPrototypeHomeContainer.setActiveItem('HSCCPrototypeListContainer', {
							type : 'slide',
							direction : 'right'
						});
					}
				}, {
					xtype : 'spacer'
				}, {
					text : 'Save',
					ui : 'action',
					handler : function() {

						// fetch the current note
					var currentNote = HSCCPrototypeApp.views.noteEditor.getRecord();

					// update cache record
					HSCCPrototypeApp.views.noteEditor.updateRecord(currentNote);

					// vlaidate for incomplete data elements required for cache persistence
					var errors = currentNote.validate();
					if (!errors.isValid()) {
						Ext.Msg.alert('Wait!', errors.getByField('title')[0].message, Ext.emptyFn);
						return;
					}

					var HSCCPrototypeStore = HSCCPrototypeApp.views.HSCCPrototypeList.getStore();

					// if not found on the loca cache store, add it as new entity
					if (null == HSCCPrototypeStore.findRecord('id', currentNote.data.id)) {
						HSCCPrototypeStore.add(currentNote);
					}

					// sync up cache store
					HSCCPrototypeStore.sync();

					// sort the cache store
					HSCCPrototypeStore.sort( [ {
						property : 'date',
						direction : 'ASC'
					} ]);

					// refresh after sorting
					HSCCPrototypeApp.views.HSCCPrototypeList.refresh();

					// render list container after successful cache update
					HSCCPrototypeApp.views.HSCCPrototypeHomeContainer.setActiveItem('HSCCPrototypeListContainer', {
						type : 'slide',
						direction : 'right'
					});
				}
				} ]
			});

			// Actual HSCCPrototype editor compoenet
			HSCCPrototypeApp.views.noteEditor = new Ext.form.FormPanel( {
				id : 'noteEditor',
				dockedItems : [ HSCCPrototypeApp.views.noteEditorTopToolbar,
						HSCCPrototypeApp.views.noteEditorBottomToolbar ],
				items : [ {
					xtype : 'textfield',
					name : 'title',
					label : 'Title',
					required : true
				}, {
					xtype : 'textareafield',
					name : 'narrative',
					label : 'Narrative'
				} ]
			});

			// HSCCPrototype list component
			HSCCPrototypeApp.views.HSCCPrototypeList = new Ext.List(
					{
						id : 'HSCCPrototypeList',
						store : 'HSCCPrototypeStore',
						grouped : true,
						emptyText : '<div style="margin:5px;">No facts cached.</div>',
						onItemDisclosure : function(record) {
							HSCCPrototypeApp.views.noteEditor.load(record);
							HSCCPrototypeApp.views.HSCCPrototypeHomeContainer.setActiveItem('noteEditor', {
								type : 'slide',
								direction : 'left'
							});
						},
						itemTpl : '<div class="list-item-title">{title}</div>' + '<div class="list-item-narrative">{narrative}</div>',

						listeners : {
							'render' : function(thisComponent) {
								console.log('Loading feeds from local cache.');
								loadMockData();
								thisComponent.getStore().load();
							}
						}
					});

			// HSCCPrototype Testing Center list component
			HSCCPrototypeApp.views.HSCCPrototypeCenterList = new Ext.List(
					{
						id : 'HSCCPrototypeCenterList',
						store : 'HSCCPrototypeCenterStore',
						grouped : true,
						emptyText : '<div style="margin:5px;">No Testing Centers Cached.</div>',

						itemTpl : '<div class="list-item-centertitle">{name}</div>' + '<div class="list-item-centerinfo">{stAdd1}</div>' + '<div class="list-item-centerinfo">{city}, {state}, {zip}</div>' + '<div class="list-item-centerinfo">{phone}</div>',

						listeners : {
							'render' : function(thisComponent) {
								console.log('Loading testing centers from local cache.');
								thisComponent.getStore().load();
							}
						}
					});

			// Tool bar for HSCCPrototype list
			HSCCPrototypeApp.views.HSCCPrototypeListToolbar = new Ext.Toolbar( {
				id : 'HSCCPrototypeListToolbar',
				title : 'HIV/STD Feeds',
				layout : 'hbox',
				items : [ {
					iconCls : 'refresh',
					iconMask : true,
					handler : function() {
						HSCCPrototypeApp.views.HSCCPrototypeHomeContainer.setActiveItem('HSCCPrototypeListContainer', {
							type : 'slide',
							direction : 'right'
						});
					}
				}, {
					xtype : 'spacer'
				}, {
					iconCls : 'add',
					iconMask : true,
					id : 'btn-new-note',
					handler : function() {
						var now = new Date();
						var noteId = now.getTime();
						var note = Ext.ModelMgr.create( {
							id : noteId,
							date : now,
							title : '',
							narrative : ''
						}, 'Fact');
						HSCCPrototypeApp.views.noteEditor.load(note);
						HSCCPrototypeApp.views.HSCCPrototypeHomeContainer.setActiveItem('noteEditor', {
							type : 'slide',
							direction : 'left'
						});
					}
				} ]
			});

			// The Map widget!!
			hsccMapDemo = new Ext.Map( {
				mapOptions : {
					zoom : 12,
					mapTypeId : google.maps.MapTypeId.ROADMAP,
					navigationControl : true,
					navigationControlOptions : {
						style : google.maps.NavigationControlStyle.DEFAULT
					}
				},

				plugins : [ new Ext.plugin.GMap.Tracker( {
					trackSuspended : true, //suspend tracking initially
					highAccuracy : false,
					marker : new google.maps.Marker( {
						position : position,
						title : 'My Current Location',
						shadow : shadow,
						icon : image
					})
				}), new Ext.plugin.GMap.Traffic( {
					hidden : true
				}) ],

				listeners : {
					maprender : function(comp, map) {
						Ext.getBody().mask('Fetching Testing Centers...', 'x-mask-loading', false);
						Ext.util.JSONP.request( {
							url : 'http://locator.aids.gov/data',
							callbackKey : 'callback',
							params : {
								zip : '15213',
								services : 'testing'
							},
							callback : function(result) {

								// remove all items from cache
							var HSCCPrototypeCenterStore = HSCCPrototypeApp.views.HSCCPrototypeCenterList.getStore();
							// clean up store data
							HSCCPrototypeCenterStore.removeAll(true);
							// sync up cache store
							HSCCPrototypeCenterStore.sync();

							// retrieved providers (JSON response)
							var providers = result.services[0].providers;
							// initialize local variables (expensive to keep initalizing inside the iteration)
							var now;
							var uId = 1;
							var center;
							// if providers exist, proceed further in manipulating JSONP data elements
							if (providers) {
								for ( var i = 0; i < providers.length; i++) {
									var marker = new google.maps.Marker( {
										position : new google.maps.LatLng(providers[i].point.lat,
												providers[i].point.lng),
										shadow : shadow,
										title : 'Name Of the Center: ' + providers[i].title + ' Address: '
												+ providers[i].streetAddress + ' City: ' + providers[i].locality
												+ ' Zip Code: ' + providers[i].postalCode + ' State: '
												+ providers[i].region + ' Phone: ' + providers[i].telephone
												+ ' Updated Date: ' + providers[i].updated,
										icon : image,
										map : map
									});

									map.panTo(position);

									// Load center details into cache for list view
									now = new Date();
									console.debug('Before > ' + uId);
									// hack to make the id unique
									uId = (now.getTime() * Math.random() * 11) + Math.floor(Math.random() * 11);
									console.debug('After > ' + uId);
									center = Ext.ModelMgr.create( {
										id : uId,
										date : now,
										name : providers[i].title,
										stAdd1 : providers[i].streetAddress,
										stAdd2 : providers[i].updated,
										city : providers[i].locality,
										state : providers[i].region,
										country : 'US',
										zip : providers[i].postalCode,
										phone : providers[i].telephone
									}, 'CenterInfo');

									HSCCPrototypeCenterStore.add(center);
									console.debug('Added to local cache > ' + center.data.name);
								}
							} else {
								alert('There was an error retrieving the testing centers.');
							}
							Ext.getBody().unmask();

							// sync up cache store
							HSCCPrototypeCenterStore.sync();

							// sort the cache store
							HSCCPrototypeCenterStore.sort( [ {
								property : 'name',
								direction : 'ASC'
							} ]);

							// refresh after sorting
							HSCCPrototypeApp.views.HSCCPrototypeCenterList.refresh();
						}
						});

						setTimeout(function() {
							//map.panTo(position);
							}, 1000);
					}

				}
			});

			// HSCCPrototype List Container (Home Page / Body)
			HSCCPrototypeApp.views.HSCCPrototypeListContainer = new Ext.Panel( {
				id : 'HSCCPrototypeListContainer',
				layout : 'fit',
				dockedItems : [ HSCCPrototypeApp.views.HSCCPrototypeListToolbar,
						HSCCPrototypeApp.views.noteEditorBottomToolbarHOME ],
				items : [ HSCCPrototypeApp.views.HSCCPrototypeList ]
			});

			// HSCCPrototype Map Container
			HSCCPrototypeApp.views.HSCCPrototypeMapContainer = new Ext.Panel( {
				id : 'HSCCPrototypeMapsContainer',
				layout : 'fit',
				dockedItems : [ toolbar ],
				items : [ hsccMapDemo ]
			});

			// HSCCPrototype Map List Container
			HSCCPrototypeApp.views.HSCCPrototypeMapListContainer = new Ext.Panel( {
				id : 'HSCCPrototypeMapListContainer',
				layout : 'fit',
				dockedItems : [ testingCenterListToolBar ],
				items : [ HSCCPrototypeApp.views.HSCCPrototypeCenterList ]
			});

			// HSCCPrototype Video Container
			HSCCPrototypeApp.views.HSCCPrototypeVideoContainer = new Ext.Panel( {
				id : 'HSCCPrototypeVideoContainer',
				layout : {
					type : 'vbox',
					pack : 'center'
				},
				dockedItems : [ toolbar ],
				items : [ {
					xtype : 'video',
					url : 'images/space.mp4',
					loop : true,
					width : 500,
					height : 400,
					posterUrl : 'images/screenshot.png'
				} ],
				fullscreen : true
			});

			/** Sections/Facelets/Modules - End */

			/** Main Facelet (embeds all components) - Start */
			// Collection of all HSCCPrototype Containers
			HSCCPrototypeApp.views.HSCCPrototypeHomeContainer = new Ext.Panel( {
				fullscreen : true,
				layout : 'card',
				cardAnimation : 'slide',
				loadMockData : loadMockData,
				items : [ HSCCPrototypeApp.views.HSCCPrototypeListContainer,
						HSCCPrototypeApp.views.HSCCPrototypeMapContainer,
						HSCCPrototypeApp.views.HSCCPrototypeVideoContainer, HSCCPrototypeApp.views.noteEditor,
						HSCCPrototypeApp.views.HSCCPrototypeMapListContainer ]
			})
			/** Main Facelet (embeds all components) - End */
		}
		});
