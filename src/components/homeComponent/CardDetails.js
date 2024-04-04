
import graph from "../../assets/images/graph.png"
import sort from "../../assets/images/sort.png"
import primes from "../../assets/images/primes.jpg"
import queen from "../../assets/images/queen.png"
import binSearch from "../../assets/images/binaryTree.png"
import convex from "../../assets/images/convexHull.png"
import puzzle from "../../assets/images/15puzzle.png"



export function getDetails() {
    return [
        {
            id: 1,
            title: "Pathfinder",
            description: "Visualize graph algorithms like dijkstra, BFS, DFS",
            route: "/pathfinder",
            img: graph
        },

        {
            id: 2,
            title: "Sorting Algorithm",
            description: "Compare different sorting algorithms",
            route: "/sort",
            img: sort
        },

        {
            id: 3,
            title: "N Queen",
            description: "The N queens puzzle is the problem of placing N chess queens on an N*N chessboard so that no two queens threaten each other",
            route: "/nqueen",
            img: queen
        },

        {
            id: 4,
            title: "Prime Numbers",
            description: "Visualize how Seive is better than brute force",
            route: "/prime",
            img: primes
        },
        {
            id: 5,
            title: "Convex Hull",
            description: "The convex hull of a set of points is the smallest convex polygon that contains all the points of it",
            route: "/convexhull",
            img: convex
        },
        {
            id: 6,
            title: "Binary Search",
            description: "Binary search is an efficient algorithm for finding an item from a sorted list of item",
            route: "/binarysearch",
            img: binSearch
        },
        {
            id: 7,
            title: "15 Puzzle",
            description: "The 15 puzzle is a sliding puzzle having 15 square tiles numbered 1–15 in a frame that is 4 tiles high and 4 tiles wide, leaving one unoccupied tile position",
            route: "/15puzzle",
            img: puzzle
        }
    ]
}