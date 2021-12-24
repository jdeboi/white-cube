export interface IUser {
    id: string;
    avatar: string;
    userName: string;
    roomUrl: string;
    comp: number | null;
    roomX: number;
    roomY: number;
    x: number;
    y: number;
    wineTime: string | null;
    needsWine: boolean;
    cheeseTime: string | null;
    needsCheese: boolean;
    cocktailTime: string | null;
    needsCocktail: boolean;
    outside: boolean;
}


export interface IUsers extends Array<IUser> { }

export interface IBar {
    type: string;
    x: number;
    y: number;
    w: number;
    h: number;
    tender: IUser;
}

export interface IBars extends Array<IBar> { }

export interface IWindowUI {
    width: number;
    height: number;
    isMobile: boolean;
    orientation: string;
    size: string;
    hasFooter: boolean;
    loading: boolean;
    headerH: number;
    toolbarH: number;
    contentW: number;
    contentH: number;
    compositionStarted: boolean;
    edgeSpacing: number;
}

export interface IListItem {
    title: string;
    link: string;
    shortcut?: string;
    classN?: string;
}

export interface IMainMenu {
    isClosed: boolean;
    isMenuOn: boolean;
}

export interface IHeaderProps extends IMainMenu {
    avatarClicked: () => void
}


export interface IMenuBasic {
    isHidden: boolean
}

export interface IMenu {
    mobile: string;
    map: IMenuBasic
    faq: IMenuBasic
    signIn: IMenuBasic
    volume: IMenuBasic
    chat: IMenuBasic
    userIcons: IMenuBasic
    liveStream: {
        isHidden: boolean;
        hasClicked: boolean;
    };
    isGalleryActive: boolean;
}


export interface IMessage {
    from: string,
    to: string,
    message: string,
    time: string,
    roomUrl: string,
    avatar: string,
    socketId?: string
}

export interface IMessages {
    messages: IMessage[],
    notifications: number
}

export interface IChat {
    sendMessage: (txt: string) => void;
    users: IUsers, 
    textBox: string,
    onSubmit: (txt: string) => void;
    setRecipient: (user: IUser | null | undefined) => void;
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    handleTextBoxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
    

export interface IRoom {
    id: number,
    roomName?: string,
    shortcut?: string,
    classN?: string,
    link: string,
    title: string,
    artist: string,
    medium?: string,
    description: string,
    year: number,
    x: number,
    y: number,
    dir: string
}