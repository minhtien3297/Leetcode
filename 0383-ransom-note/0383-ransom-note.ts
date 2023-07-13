function canConstruct(ransomNote: string, magazine: string): boolean {
    if (magazine.length < ransomNote.length) return false;

    let magazineArray: string[] = magazine.split('')
    let ransomNoteArray: string[] = ransomNote.split('')

    while (ransomNoteArray.length > 0) {
        let check: number = 0;

        check = magazineArray.indexOf(ransomNoteArray[0])
        if (check !== -1) {
            ransomNoteArray.splice(0, 1);
            magazineArray.splice(check, 1);
        } else return false
    }

    return true;
};
