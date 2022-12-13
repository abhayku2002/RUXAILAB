     /**
     * Create a TemplateAuthorAuthor.
     * @param {string} userEmail - The userEmail value.
     * @param {string} userDocId - The userDocId value.
     */

export default class TemplateAuthor{
    constructor(userEmail, userDocId){
        this.userEmail = userEmail;
        this.userDocId = userDocId;
    }
    static toTemplateAuthor(){
        return new TemplateAuthor()
    }
}