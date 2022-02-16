export const copywriter = {
  global: {
    title: 'NFT 1-SYNC',
    welcome: 'Welcome To NFT 1-Sync Platform',
    loadMoreBtnText: 'Load More',
    unAuthorizedToAccess: 'Sorry, you are not authorized to access this page.',
    pageNotExists: 'Sorry, the page you visited does not exist.',
    titles: {
      walletAddress: 'Wallet Address',
      walletBalance: 'Wallet Balance',
      appSecret: 'App Secret',
      appDesc: 'App Description',
      contractAddress: 'Contract Address',
      contractDesc: 'Contract Description',
      contractEndPoint: 'Endpoint'
    },
    placeholder: {
      noDescription: 'No description'
    }
  },
  login: {
    toInputEmail:'Please input your email!',
    toEnterCorrect:'Please enter the correct email address!',
    toInputPassword:'Please input your password!',
    loginExpired:'Login expired, please login again!',
    pleaseLoginFirst: 'Please login first!'
  },
  register: {
    toInputUsername:'Please input your username!',
    toInputVerificationCode:'Please input your verification code!',
    toInputPassword:'Please input your password!',
    toReconfirmPassword:'Please reconfirm the password you entered！',
    sendCodeButtonLoading:'Sending',
    sendCodeButtonPrimary:'Send Code',
    sendCodeButtonAgain:'Send Again'
  },
  useQueryNotification: {
    getApplicationListFailed: 'Failed to get application list',
    getWalletAddressFailed: 'Failed to get wallet address',
    getApplicationDetailFailed: 'Get application detail failed',
    getApplicationContractsFailed: 'Get application contracts failed',
    getCollectionDetailFailed: 'Get collection detail failed',
    getCollectionEventsFailed: 'Get collection events failed',
    getContractTemplatesFailed: 'Get contract templates failed',
    getContractEventsFailed: 'Get contract events failed',
    deleteAppSus: 'Application delete succeed',
    deleteAppFail: 'Application delete failed',
    loadAppFail: 'Application load failed',
    updateAppSus: 'Update application succeed',
    updateAppFail: 'Failed to update application',
    getEventLogFail: 'Failed to get event logs',
    getCollectionListFail: 'Failed to get collection list',
    updateCollectionFail: 'Failed to update collection',
    getMetaDataFail: 'Failed to get metadata',
    updateMetaDataFail: 'Failed to update metadata',
    addMetaDataFail: 'Failed to add metadata',
    addMetaDataSchemaSus: 'Add metadata schema succeed!',
    addMetaDataSchemaFail: 'Failed to add metadata schema',
    addWebhookSus: 'Add new event succeed!',
    addWebhookFail: 'Failed to add new event'
  },
  application: {
    deleteAppTitle: 'Are you sure delete this application?',
    deleteAppDesc: 'This can not be undo',
    yourApplication: 'Your Application',
    addNewApplicationBtnText: 'Add New Application',
    add: {
      stepOne:{
        title: "Init New Application",
        initSus: 'Application init success!',
        initFailed: 'Application init failed!',
        initNow: 'Init now',
        fields: {
          applicationName: {
            label: 'Application Name',
            required: 'Application name is required!',
            placeholder: 'Please input application name',
          },
          applicationDesc: {
            label: 'Description',
            placeholder: 'Please input application description'
          }
        }
      },
      stepTwo: {
        title: 'Add New NFT Collection',
        deploySus: 'Collection deploy success!',
        deployFailed: 'Collection deploy failed!',
        getTemplatesFailed: 'Get contract templates failed',
        getWalletAddressFailed: 'Get wallet address failed',
        fields: {
          template: {
            label: 'Template',
            placeholder: 'Please select template',
            required: 'Template is required'
          },
          collectionName: {
            label: 'Collection Name',
            placeholder: 'Please input collection name',
            required: 'Collection name is required'
          },
          collectionDescription: {
            label: 'Collection Description',
            placeholder: 'Please input collection description',
          },
          tokenName: {
            label: 'Token Name',
            placeholder: 'Please input token name',
            required: 'Token name is required'
          },
          tokenSymbol: {
            label: 'Token Symbol',
            placeholder: 'Please input token symbol',
          },
          adminAccount: {
            label: 'Admin Account',
            placeholder: 'Please select admin account',
            required: 'Admin account is required'
          }
        }
      },
      stepThree: {
        title: 'More Options',
        goToNftCollectionDashBoard: 'Go to NFT collection dashboard',
        moreOptionsWaitingForSyncComplete: 'Waiting for synchronization to complete...',
        moreOptionsTipText: 'Once the synchronization is done, you can update more info in your collection dashboard'
      }
    }

  },
  collection: {
    yourCollections: 'Your Collections',
    addNewNftCollection: 'Add New NFT Collection',
    updateMetaDataItem: 'Update Metadata Item',
    metaDataList: 'MetaData List',
    createMetaDataItem: 'Create Metadata Items',
    editMetaDataConfig: 'Edit Metadata Config',
    loadMoreDataFail: 'Failed to load more data',
    createMetaDataPage: {
      batchCreateMetaDataItems: 'Batch Create Metadata Items',
      errorWhileFormatBatchJson: 'Error while format input string as json object array',
      noDataFound: 'No data found!',
      incorrectDataFormat: 'Incorrect data format',
      deleteThisLine: 'Delete this line?',
      onlyOneLineEditorAlertMessage: 'Only one row can be edited at a time',
      onlyAddOneLineAlertMessage: 'Only one new row can be added',
      pleaseAddMetadataSchemaFirst: 'Please add metadata schema first'
    },
    editMetaDataConfigPage: {
      fileTypeSupport: 'File types supported: PNG, JPG, or GIF',
      failedToFormatSchema: 'Failed to format metadata schema',
      currentCollectionAlreadyInit: 'Current collection has already init schema!',
      clickToUpload: 'Click to upload',
      fields: {
        collectionName: {
          label: 'Collection Name'
        },
        contractAddress: {
          label: 'Contract Address'
        },
        metadataSchema: {
          label: 'Metadata Schema',
          required: 'Metadata schema is required',
          placeholder: 'Please input metadata schema'
        },
        defaultImage: {
          label:'Default Image',
          required: 'Default image is required'
        }
      }
    }
  },
  synchronization: {
    addNewEventsBtnText: 'Add New Event',
    allSyncEvents: 'All Synchronization Events',
    addPage: {
      title: 'Add Sync Event',
      addEventsBtnText: 'Add Events',
      pleaseAddSomeEvent: 'Please add some event',
      pleaseFillEventBlank: 'Please fill event blank',
      pleaseAddOneRecord: 'Please add at least one record',
      fields: {
        collectionName: {
          label: 'Collection Name',
          placeholder: 'Please select collection name',
          required: 'Collection name is required'
        },
        contractAddress: {
          label: 'Contract Address',
          placeholder: 'Please input contract address',
          required: 'Contract address is required'
        },
        eventId: {
          label: 'Event Name',
          placeholder: 'Please select event',
          required: 'Event name is required'
        },
        webhook: {
          lable: 'Webhook Endpoint',
          placeholder: 'Please input webhook endpoint',
          required: 'Webhook endpoint is required'
        }
      }
    },
    events: {
      title: 'Sync log'
    }
  },
  adminWallet: {
    refreshAccountBalanceSus: 'Refresh account balance succeed!',
  }
}