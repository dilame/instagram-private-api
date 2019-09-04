export interface MediaRepositoryCheckOffensiveCommentResponseRootObject {
    is_offensive: boolean;
    bully_classifier: string;
    hate_classifier: string;
    sexual_classifier: string;
    spam_classifier: string;
    status: string;
}
