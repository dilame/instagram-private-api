export interface AddressBookRepositoryLinkResponseRootObject {
    users: AddressBookRepositoryLinkResponseUsersItem[];
    warning: string;
    status: string;
}
export interface AddressBookRepositoryLinkResponseUsersItem {
    pk: number;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id: string;
    is_verified: boolean;
    has_anonymous_profile_picture: boolean;
    addressbook_name: string;
}
