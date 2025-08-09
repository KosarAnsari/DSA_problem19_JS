# Day 19 - Longest Substring Without Repeating Characters

## 📌 Problem Statement
Given a string `s`, find the length of the **longest substring** without repeating characters.

### Example:

Input: s = "abcabcbb" Output: 3 Explanation: The answer is "abc", with the length of 3.

---

## 💡 Approach
I solved this using the **Sliding Window** technique with a **Set** to track unique characters.

### Steps:
1. Initialize two pointers:
   - `start` → marks the start of the current substring.
   - `end` → marks the end of the current substring.
2. Use a **Set** to store the unique characters within the current window.
3. If the character at `end` is **not** in the Set:
   - Add it to the Set.
   - Move `end` forward.
   - Update `maxLength` with the size of the Set.
4. If the character at `end` **is** already in the Set:
   - Remove the character at `start` from the Set.
   - Move `start` forward.
5. Continue until `end` reaches the end of the string.

---

## ⏳ Complexity Analysis
- **Time Complexity:** `O(n)` → each character is visited at most twice.
- **Space Complexity:** `O(min(n, m))` → where `m` is the size of the character set.

---

## 📝 Code Implementation
```javascript
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    let end = 0, start = 0, maxLength = 0;
    const uniqueChar = new Set();

    while (end < s.length) {
        if (!uniqueChar.has(s[end])) {
            uniqueChar.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueChar.size);
        } else {
            uniqueChar.delete(s[start]);
            start++;
        }
    }
    return maxLength;
};


---

🔍 Learning

The Sliding Window approach drastically improves performance for problems involving substrings and subarrays, reducing complexity from O(n²) to O(n).


---

🏷️ Tags

#JavaScript #DSA #SlidingWindow #TwoPointers #Strings
