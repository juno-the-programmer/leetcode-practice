/*
In English, we have a concept called root, which can be followed by some other word to form another longer word - let's call this word successor. For example, when the root "an" is followed by the successor word "other", we can form a new word "another".

Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the successors in the sentence with the root forming it. If a successor can be replaced by more than one root, replace it with the root that has the shortest length.

Return the sentence after the replacement.

Example 1:
Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"

Example 2:
Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
Output: "a a b c"
*/
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
// Approach 1: Hashset
var replaceWords = function(dictionary, sentence) {

    const rootset = new Set();
    for(d of dictionary) {
        rootset.add(d);
    }

    let ans = "";
    const words = sentence.split(" ");
    for(let word of words) {
        let prefix = "";
        for(let i = 1; i <= word.length; ++i) {
            prefix = word.substring(0,i);
            if(rootset.has(prefix)) {
                break;
            }
        }

        if (ans.length > 0) // If it's not the first word in sentence, add a space
            ans += " "
        ans += prefix;
    }

    return ans;
};

/* Approach 2: Trie
Time Complexity: O(N) where N is the length of the sentence. Every query of a word is in linear time.
Space Complexity: O(N), the size of our trie.
*/
const Node = function(x) {
    this.val = x;
    this.children = new Map();
}

var replaceWords = function(dictionary, sentence) {
    const res = [], head = new Node('');
    for(word of dictionary) {
        let curr = head;
        for(c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, new Node(c));
            }
            curr = curr.children.get(c);
        }
        curr.children.set('.', new Node('.'));
    }

    const words = sentence.split(" ");
    for(let word of words) {
        let curr = head, newWord = [];
        for(let c of word) {
            if (!curr.children.has(c)) break;
            if (curr.children.has('.')) break;
            newWord.push(c);
            curr = curr.children.get(c);
        }
        if (newWord.length) {
            res.push(curr.children.has('.') ? newWord.join('') : word);
        } else {
            res.push(word);
        }
    }
    return res.join(' ');
};



const result = replaceWords(["cat","bat","rat"], "the cattle was rattled by the battery");
console.log(result);