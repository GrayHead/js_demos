# Interview Project: Grocery List
We need to build a grocery list web app. The goal is to make it easy for me to remember what food to buy at the grocery store. There is no backend for this application, and we're not asking you to build one, this is purely a frontend React problem so it should use local storage to maintain the list and the details of each entry between sessions.

There are two primary views: the list view and the entry view. 

## Grocery List View
On the list view, I can add entries, remove entries, toggle the status of that entry as either "ran out" or "have", see when the status toggle was last changed, and filter entries by status. The list view should always sort by priority first, and then alphabetically. Priority 1 is highest priority, 5 is the lowest. I should be able to filter for only "ran out", "have", or all, this will make it easy for when I'm shopping to see what I need to buy by filtering for the "ran out" status.

## Grocery Entry View
On the entry view, I can see all of the details of the entry, toggle its status, and view the history of when its status has ever changed. Each entry has a name for the item (e.g. bread, eggs, etc), status (ran out or have) and a priority (numbers 1 through 5). I should also be able delete the current entry here as well.

## Guidelines
Do not spend more than 4 hours working on this task. If we have a technical interview, and I hope we do, we will focus on enhancing this application and discussing how you worked through some of these problems. It's important that we see your best work, if that means that you do not satisfy all of the requirements here that is okay, we don't expect everyone to finish all parts of this in 4 hours. If you have to choose between refactoring and making one piece of this perfect and implementing the next feature, choose refactoring because we want to see how your best work looks. We want to see clear, correct code that uses the right data structures and patterns, and we want to see your style.
