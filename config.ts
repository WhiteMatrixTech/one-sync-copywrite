export const copywriter = {
  global: {
    title: 'NFT 1-SYNC',
    welcome: 'Welcome To NFT 1-Sync Platform'
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
    getApplicationDetailFailed: 'Get application detail failed',
    getCollectionDetailFailed: 'Get collection detail failed',
    deleteAppSus: 'Application delete succeed',
    deleteAppFail: 'Application delete failed',
    loadAppFail: 'Application load failed',
    updateAppSus: 'Update application succeed',
    updateAppFail: 'Failed to update application'
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
            label: 'Admin account',
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
  collection: {},
  synchronization: {},
  adminWallet: {}
}